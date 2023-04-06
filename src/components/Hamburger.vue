<template>
    <svg ref="nav__open" tabindex="0" role="button" aria-label="Open navigation" @click="openNavigation" class="header__hamburger"
    viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHamburger',
  setup(_, context) {
    const openNavigation = () => {
        context.emit('toggleMenu');
    }

    return { openNavigation };
  }
})
</script>


<style scoped>
.header__hamburger {
  width: 45px;
  height: 45px;
  padding: 5px;
  margin: 5px;
  fill: rgb(255, 255, 255);
}

.header__hamburger:hover {
  cursor: pointer;
  background: rgb(255, 255, 255);
}
</style>
