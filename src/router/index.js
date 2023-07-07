import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/HomePage.vue'

import BibliographyType from '../views/BibliographyType.vue';
//src\views\BibliographyType.vue
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false
    }
  }, {
    path: '/bibliography-type',
    name: 'BibliographyType',
    component: BibliographyType
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
