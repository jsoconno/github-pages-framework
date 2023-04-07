// router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ConfigManager from '../services/configManager';

const routes: RouteRecordRaw[] = ConfigManager.getRoutingConfig() as RouteRecordRaw[];

// Log the routes
console.log('Generated Routes:', routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;