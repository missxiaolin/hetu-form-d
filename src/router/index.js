import Vue from 'vue'
import VueRouter from 'vue-router'
import PagePreview from '../views/PagePreview/PagePreview'
import PageCustom from '../views/PageCustom/PageCustom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page/view'
  }, {
    path: '/page/view',
    name: 'PagePreview',
    component: PagePreview
  }, {
    path: '/page/custom',
    name: 'PageCustom',
    component: PageCustom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
