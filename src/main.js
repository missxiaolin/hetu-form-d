import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

import MarkingForm from './components/MarkingForm/MarkingForm.vue'
import DeleteAttr from './components/Dialog/DeleteAttr'
import Dialog from './components/Dialog/Dialog'

// 引入样式
import './assets/css/index.css'

// 剪切板
import VueClipboard from 'vue-clipboard2'

// vue 粘贴板复制插件
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.prototype.axios = axios

// 注册组件
Vue.use(MarkingForm.name, MarkingForm)
Vue.use(Dialog.name, Dialog)
Vue.use(DeleteAttr.name, DeleteAttr)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
