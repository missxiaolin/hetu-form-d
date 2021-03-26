import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let state = {
  selectedWidget: null
}
let mutations = {
  set_selectWidget: (state, selectedWidget) => {
    state.selectedWidget = selectedWidget || ''
  }
}
let getters = {
  selectWidget: (state, getters) => {
    let selectedWidget = state.selectedWidget
    if (selectedWidget) {
      return selectedWidget
    } else {
      return {}
    }
  }
}
let actions = {}
let modules = {}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
