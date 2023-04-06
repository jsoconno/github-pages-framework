<template>
  <div class="nav__search">
    <input class="nav__search-input" placeholder="Type to search..." v-model="searchKeywords" @keyup="search" />
    <svg v-if="searchResultsVisible" class="nav__search-icon" tabindex="0" @click="reset" @keyup.enter="reset"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <path
        d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
      <path
        d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppSearch',
  setup() {
    const content = ref([]);
    const searchKeywords = ref('');
    const searchResultsVisible = ref(false);

    const search = async ($event: Event) => {
      console.log($event);
      // Your search logic here
    };

    const reset = () => {
      searchResultsVisible.value = false;
      searchKeywords.value = '';
    };

    return {
      content,
      searchKeywords,
      searchResultsVisible,
      search,
      reset,
    };
  },
});
</script>


<style scoped>
.nav__search {
  position: relative;
  display: block;
  margin-right: 50px;
  margin-left: 50px;
  width: 100%;
  height: 50%;
}

.nav__search-input {
  width: 100%;
  height: 40px;
  padding-left: 15px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 250px;
}

.nav__search-icon {
  position: absolute;
  top: 12px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>