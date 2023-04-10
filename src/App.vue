<!-- src/App.vue -->
<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navigation
        :is-sidebar-open="isNavOpen"
        @link-clicked="toggleSidebar"
        :items="tocItems"
      />
      <main>
        <router-view v-if="!searchResultsVisible" />
        <vue3-markdown-it class="content" :source=markdown></vue3-markdown-it>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ConfigManager from './services/configManager'
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Vue3MarkdownIt from 'vue3-markdown-it';
import axios from 'axios';

export default defineComponent({
  components: {
    Header,
    Navigation,
    Footer,
    Vue3MarkdownIt
  },
  setup() {
    const isNavOpen = ref(false);
    const tocItems = ConfigManager.getPages();
    
    const tags = ref(null);
    const markdown = ref('');

    const pageConfig = ConfigManager.getMetaById(window.location.pathname) || {};

    console.log('PAGECONFIG: ', tags)

    if (pageConfig.markdown !== undefined) {
      const path = pageConfig.markdown
      tags.value = pageConfig.tags;
      const config = { headers: { 'Cache-Control': 'no-cache' } };
      axios.get(path, config).then(response => {
        markdown.value = response.data;
        console.log(markdown.value)
      });
    }

    const toggleSidebar = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    // console.log(ConfigManager.getPages())

    return {
      baseUrl: '',
      isNavOpen,
      tocItems: tocItems,
      markdown: markdown,
      content: [],
      searchResultsVisible: false,
      searchResults: null,
      searchKeywords: null,
      toggleSidebar
    };
  },
});
</script>

<style>
* {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.main-container {
  display: flex;
}
</style>
