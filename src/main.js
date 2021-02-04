import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 引入样式
import './assets/css/index.css'

// 剪切板
import VueClipboard from 'vue-clipboard2'

// vue 粘贴板复制插件
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
