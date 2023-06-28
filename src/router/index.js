import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraphView from '../views/GraphView.vue'
import ComponentView from '../views/ComponentView.vue'
import AnimateView from '../views/AnimateView.vue'
import TreeView from '../views/TreeView.vue'
import SliderView from '../views/SliderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/slider',
      name: 'slider',
      component: SliderView
    },
    {
      path: '/graph',
      name: 'graph',
      component: GraphView
    },
    {
      path: '/component',
      name: 'component',
      component: ComponentView
    },
    {
      path: '/animate',
      name: 'animate',
      component: AnimateView
    },
    {
      path: '/tree',
      name: 'tree',
      component: TreeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
