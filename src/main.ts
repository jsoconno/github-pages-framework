import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import filters from './filters';

type FiltersType = {
  truncate: (text: string, length: number, clamp?: string | undefined) => string;
  [key: string]: any;
};

const typedFilters: FiltersType = filters;

const app = createApp(App);

app.use(router);

library.add(far, fas, fab);

app.component('font-awesome-icon', FontAwesomeIcon);

Object.keys(typedFilters).forEach((key: string) => {
  app.config.globalProperties[key] = typedFilters[key];
});

app.mount('#app');
