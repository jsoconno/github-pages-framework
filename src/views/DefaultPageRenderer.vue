<template>
  <div class="container" @scroll="handleScroll">
    <Breadcrumb></Breadcrumb>
    <section class="banner" 
      :class="{ active: isActive }" 
      v-if="pageConfig && !pageConfig.tiles"
      :data-name="pageConfig.name"
    >
      <h2 class="banner__title">{{ pageConfig.name }}</h2>
      <h4 class="banner__text">{{ pageConfig.description }}</h4>
      <!-- <p class="banner__timestamp">Last Modified: {{ formatTimestamp(lastModified) }}</p> -->
      <p class="banner__timestamp">Last Modified: {{ lastModified }}</p>

    </section>

    <section class="tags" v-if="tags">
      <span tabindex="0" v-for="(tag, idx) in tags" :key="idx" class="tag" @keyup.enter="searchTopic(tag)" @click="searchTopic(tag)">{{tag}}</span>
    </section>

    <vue-markdown class="content" :source="markdown"></vue-markdown>

    <ul class="cards" v-if="pageConfig.tiles">
      <li class="card"
        v-for="(tile, key) in pageConfig.tiles"
        :key="key"
        :style="{ backgroundColor: tile.bgColor }"
      >
        <router-link :to="tile.path">
          <font-awesome-icon class="card__icon" size="2x" :icon="tile.icon"/>
          <h4 class="card__title">{{tile.name}}</h4>
          <p class="card__text">{{tile.description}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import ConfigManager from '../services/configManager'
import VueMarkdown from 'vue-markdown'
import Breadcrumb from '../components/Breadcrumb'
import axios from 'axios'

export default {
  components: {
    VueMarkdown,
    Breadcrumb
  },
  data () {
    return {
      markdown: '',
      lastModified: '',
      pageConfig: {},
      tocItems: ConfigManager.getPages(),
      isActive: false,
      container: null,
      initialScroll: false,
      isCommentOpen: false,
      comment: '',
      likes: 0,
      dislikes: 0,
      tags: null
    }
  },
  mounted () {
    this.initialize(this.$router.currentRoute.path)
    setTimeout(() => {
      this.scrollTo(this.$route.hash)
    }, 150)

    this.container = document.querySelector('main > .container')
    if (this.container) {
      this.container.addEventListener('scroll', () => {
      })
    }
    console.log('this.container', this.container)
    setTimeout(() => {
      const iframes = document.querySelectorAll('iframe')
      console.log('iframes', iframes)
      for (let iframe of iframes) {
        iframe.addEventListener('load', () => {
          console.log('iframe LOADED')
        })
        console.log('iframe', iframe)
      }
    }, 150)
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        this.pageConfig = to.meta
        this.initialize()
      } else {
        setTimeout(() => {
          if (to.hash) {
            this.scrollTo(to.hash)
            console.log('to.hash', to.hash)
            if (to.hash.toLowerCase() === '#toc') {
              console.log('this.$route', this.$route)
              this.$router.push({ path: to.path })
              // this.$route.push
            }
          }
        }, 10)
      }
    }
  },
  methods: {
    searchTopic (tag) {
      let filter = `tag:${tag}`
      let query = Object.assign({}, this.$route.query, { search: filter })
      this.$router.push({ query })
    },
    onLoadIFrame (event) {
      console.log('onload iframe', event)
    },
    /**
     * initialize - called whenever the DefaultPageRenderer needs to re-initialize to render a specific page
     */
    initialize () {
      this.tags = null
      if (!this.pageConfig.name) {
        let currentPath = this.$router.currentRoute.path
        this.pageConfig = ConfigManager.getMetaById(currentPath)
      }

      console.log('PAGECONFIG: ', this.tags)

      // load the markdown resource from its static resources
      this.markdown = ''
      if (this.pageConfig.markdown !== undefined) {
        const pathName = window.location.pathname
        const path = `${pathName.substring(0, pathName.length - 1)}${this.pageConfig.markdown}`
        this.tags = this.pageConfig.tags
        var config = {headers: {'Cache-Control': 'no-cache'}}
        axios.get(path, config).then(response => {
          this.lastModified = response.headers['last-modified']
          console.log(this.lastModified)
          this.markdown = response.data
        })
      }
    },
    routeTo (pRouteTo) {
      console.log('expects me to route to ', pRouteTo)
    },
    handleScroll (event) {
      if (event.target.scrollTop >= 155) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    scrollTo (hash) {
      if (hash) {
        let target = document.querySelector(`.content ${hash.toLowerCase()}`)
        if (target) {
          target.scrollIntoView(true)
          this.initialScroll = true
        }
      } else {
        document.querySelector(`main > .container`).scrollTo(0, 0)
        this.initialScroll = true
      }
    },
    // formatTimestamp (timestamp) {
    //   const date = new Date(timestamp)
    //   const formattedDate = new Intl.DateTimeFormat(undefined, {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    //   }).format(date)

    //   return formattedDate
    // }
  }
}
</script>

<style scoped>
.tags {
  margin-left: 1rem;
}

.tag {
  display: inline-block;
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 4px 2px;
  font-size: 14px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #2d74da;
  border: none;
  border-radius: 20px;
}

.tag:hover {
  background-color: #424242;
}
</style>