<template>
  <Header/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

@Options({
  components: {
    // HelloWorld,
    Header,
    Footer
  },
})
export default class App extends Vue {}
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
</style>
