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

export default defineComponent({
  components: {
    Header,
    Navigation,
    Footer,
  },
  setup() {
    const isNavOpen = ref(false);
    const tocItems = ConfigManager.getPages();
    console.log(tocItems)
    // const searchResultsVisible = ref(false);

    const toggleSidebar = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    // console.log(ConfigManager.getPages())

    return {
      baseUrl: '',
      isNavOpen,
      tocItems: tocItems,
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
