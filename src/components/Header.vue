<template>
  <header class="header">
    <div class="header__brand">
      <Hamburger/>
      <span class="header__name">{{ name }} <b>Documentation</b></span>
    </div>
    <Search/>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Hamburger from './Hamburger.vue';
import Search from './Search.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    Hamburger,
    Search,
  },
  setup() {
    const name = ref('test')

    return {
      name,
    };
  }
});
</script>



<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 55px;
  max-height: 55px;
  padding: 0 0.5rem;
  color: rgb(255, 255, 255);
  background: rgb(25, 86, 255);
}

.header__name {
  display: flex;
}

.header__name b {
  margin-left: 5px;
  font-weight: 800;
}

.header__brand {
  display: flex;
  flex: 1;
  align-items: center;
}
</style>
