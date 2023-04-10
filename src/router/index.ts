import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import configManager from '@/services/configManager'

const routes: RouteRecordRaw[] = configManager.getRoutingConfig()
console.log('Generated Routes:', routes)
console.log('Base URL:', process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
