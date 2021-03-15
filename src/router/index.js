import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PagePreview from '../views/PagePreview/PagePreview'
import PageCustom from '../views/PageCustom/PageCustom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: 'page/view',
    name: 'PagePreview',
    components: PagePreview
  }, {
    path: 'page/custom',
    name: 'PageCustom',
    components: PageCustom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
