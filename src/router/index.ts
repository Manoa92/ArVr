import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from '../views/RoomView.vue'
import ARView from '../views/ARView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/rooms/:id', component: RoomView },
    { path: '/rooms/:id/ar', component: ARView },
  ],
})

export default router
