<!-- src/components/Navigation.vue -->
<template>
  <div class="navigation">
    <div :class="{ sidebar: true, 'sidebar-open': isSidebarOpen }">
      <ul class="navbar-nav">
        <nav-item
          v-for="(item, index) in navItems"
          :key="index"
          :item="item"
          :index="index"
          @link-clicked="$emit('link-clicked')"
          @expand="collapseOthers"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItem from './NavItem.vue';
import ConfigManager from '../services/configManager';

export default defineComponent({
  name: 'AppNavigation',
  components: {
    NavItem,
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
  const config = ConfigManager.getBaseConfig();
  const headerNavigation = config.headerNavigation;

  // Define the types
  type NavItem = {
    label: string;
    to: string;
    children?: NavItem[];
    isCollapsed?: boolean;
  };

  type ConfigItem = {
    route: string;
    name: string;
    children?: ConfigItem[];
  };

  const collapseOthers = (expandedIndex: number) => {
    navItems.forEach((item, index) => {
      if (index !== expandedIndex && item.children) {
        item.isCollapsed = true;
      }
    });
  };

  // Recursive function to process nested navigation items
  const processNavItems = (items: ConfigItem[], basePath = ''): NavItem[] => {
    return items.map((item: ConfigItem) => {
      const navItem: NavItem = { label: item.name, to: basePath + item.route };
      if (item.children) {
        navItem.children = processNavItems(item.children, basePath + item.route);
      }
      return navItem;
    });
  };

  // Convert headerNavigation items to the format expected by NavItem component
  const navItems: NavItem[] = headerNavigation.map(item => {
    const page = config.pages.find(page => page.route === item.path);
    const navItem: NavItem = { label: item.name, to: item.path };
    if (page && page.children) {
      navItem.children = processNavItems(page.children);
    }
    return navItem;
  });

  return {
    navItems,
    collapseOthers,
  };
},
});
</script>


<!-- <style scoped>
/* Add any custom styling for your navigation component here */
.sidebar {
  /* Add styles for the sidebar */
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  transition: left 0.3s;
}

.sidebar-open {
  left: 0;
}

.navbar-nav {
  list-style-type: none;
  padding: 0;
}

.nav-item {
  margin: 10px 0;
}

.nav-link {
  display: block;
  color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 10px 20px;
}

.nav-link:hover {
  background-color: rgb(237, 237, 237);
}
</style> -->
