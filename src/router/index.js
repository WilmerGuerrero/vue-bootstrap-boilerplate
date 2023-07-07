import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import BibliographyType from '@/views/BibliographyType.vue';
import Editorial from '@/views/Editorials.vue';
import Authors from '@/views/Authors.vue';

import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }, {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/bibliography-type',
    name: 'bibliographyType',
    component: BibliographyType,
    meta: {
      auth: false
    }
  },
  {
    path: '/editorial',
    name: 'editorial',
    component: Editorial,
    meta: {
      auth: false
    }
  },
  {
    path: '/authors',
    name: 'authors',
    component: Authors,
    meta: {
      auth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
