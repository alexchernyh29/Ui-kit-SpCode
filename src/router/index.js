import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraphView from '../views/GraphView.vue'
import ComponentView from '../views/ComponentView.vue'
import AnimateView from '../views/AnimateView.vue'
import TreeView from '../views/TreeView.vue'
import SliderView from '../views/SliderView.vue'
import accordionView from '../views/componentView/accordionView.vue'
import breadcrumbView from '../views/componentView/breadcrumbView.vue'
import buttonView from '../views/componentView/buttonView.vue'
import tabsView from '../views/componentView/tabsView.vue'
import dropdownView from '../views/componentView/dropdownView.vue'
import switchView from '../views/componentView/switchView.vue'
import tooltipView from '../views/componentView/tooltipView.vue'
import badView from '../views/badView.vue'
import animateGsapView from '../views/animateGsapView/animateGsapView.vue'
import bounseOutView from '../views/animateGsapView/bounseOutView.vue'
import bounseUpView from '../views/animateGsapView/bounseUpView.vue'
import animateCssView from '../views/animateCssView/animateCssView.vue'
import animateBackgroundView from '../views/animateCssView/animateBackgroundView.vue'
import animateImageView from '../views/animateCssView/animateImageView.vue'
import animateImageColorView from '../views/animateCssView/animateImageColorView.vue'
import animateTextView from '../views/animateCssView/animateTextView.vue'
import animateVueView from '../views/animateVueView/animateVueView.vue'
import textFadeView from '../views/animateVueView/textFadeView.vue'
import textBounceView from '../views/animateVueView/textBounceView.vue'
import textTransitionsView from '../views/animateVueView/textTransitionsView.vue'
import textListView from '../views/animateVueView/textListView.vue'

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
      path: '/component/accordion',
      name: 'accordion',
      component: accordionView
    },
    {
      path: '/component/breadcrumb',
      name: 'breadcrumb',
      component: breadcrumbView
    },
    {
      path: '/component/button',
      name: 'button',
      component: buttonView
    },
    {
      path: '/component/tabs',
      name: 'tabs',
      component: tabsView
    },
    {
      path: '/component/dropdown',
      name: 'dropdown',
      component: dropdownView
    },
    {
      path: '/component/switch',
      name: 'switch',
      component: switchView
    },
    {
      path: '/component/tooltip',
      name: 'tooltip',
      component: tooltipView
    },
    {
      path: '/bad',
      name: 'bad',
      component: badView
    },
    {
      path: '/animate/animateGsapView',
      name: 'animateGsap',
      component: animateGsapView
    },
    {
      path: '/animate/animateGsapView/bounseOutView',
      name: 'bounseOutView',
      component: bounseOutView
    },
    {
      path: '/animate/animateGsapView/bounseUpView',
      name: 'bounseUpView',
      component: bounseUpView
    },
    {
      path: '/animate/animateCssView',
      name: 'animateCss',
      component: animateCssView
    },
    {
      path: '/animate/animateCssView',
      name: 'animateCss',
      component: animateCssView
    },
    {
      path: '/animate/animateCssView/animateBackgroundView',
      name: 'animateBackgroundView',
      component: animateBackgroundView
    },
    {
      path: '/animate/animateCssView/animateImageView',
      name: 'animateImageView',
      component: animateImageView
    },
    {
      path: '/animate/animateCssView/animateImageColorView',
      name: 'animateImageColorView',
      component: animateImageColorView
    },
    {
      path: '/animate/animateCssView/animateTextView',
      name: 'animateTextView',
      component: animateTextView
    },
    {
      path: '/animate/animateVueView',
      name: 'animateVueView',
      component: animateVueView
    },
    {
      path: '/animate/animateVueView/textFadeView',
      name: 'textFadeView',
      component: textFadeView
    },
    {
      path: '/animate/animateVueView/textBounceView',
      name: 'textBounceView',
      component: textBounceView
    },
    {
      path: '/animate/animateVueView/textTransitionsView',
      name: 'textTransitionsView',
      component: textTransitionsView
    },
    {
      path: '/animate/animateVueView/textListView',
      name: 'textListView',
      component: textListView
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
