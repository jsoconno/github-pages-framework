<template>
  <li class="nav-item">
    <router-link
      v-if="!item.children"
      class="nav-link"
      :to="item.to"
      @click="onLinkClicked"
    >
      {{ item.label }}
    </router-link>
    <router-link
      v-else
      class="nav-link"
      :to="item.to"
      @click="toggleCollapse"
    >
      {{ item.label }}
      <ul class="nested-nav" v-show="isCollapsed">
        <nav-item
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
          :item="childItem"
          @link-clicked="onLinkClicked"
        />
      </ul>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'NavItem',
  components: {
    RouterLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const isCollapsed = ref(false);

    const onLinkClicked = () => {
      emit('link-clicked');
    };

    const onParentClicked = () => {
      isCollapsed.value = !isCollapsed.value;
      emit('parent-clicked', isCollapsed.value);
    };

    const toggleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return {
      onLinkClicked,
      onParentClicked,
      toggleCollapse,
      isCollapsed,
    };
  },
});
</script>

<!-- <style scoped>
.nested-nav {
  list-style-type: none;
  padding: 0;
  margin-left: 15px;
}
</style> -->
