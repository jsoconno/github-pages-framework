<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="header__brand">
      <!-- <Hamburger @click="onHamburgerClick" /> -->
      <span class="header__name">{{ name }} <b>Documentation</b></span>
    </div>
    <Search />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Hamburger from './Hamburger.vue';
import Search from './Search.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    // Hamburger,
    Search,
  },
  setup(_, { emit }) {
    const name = 'test';

    const onHamburgerClick = () => {
      emit('toggle-sidebar');
    };

    return {
      name,
      onHamburgerClick,
    };
  },
});
</script>


<!-- <style scoped>
.header {
  /* Add the following styles */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  /* Existing styles */
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 55px;
  max-height: 55px;
  padding: 0 0.5rem;
  color: rgb(255, 255, 255);
  background: rgb(25, 86, 255);
}
</style> -->