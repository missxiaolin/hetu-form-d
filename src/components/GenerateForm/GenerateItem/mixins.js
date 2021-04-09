const mixins = {
  data() {
    return {
      itemDisabled: false,
      itemEvents: {}
    }
  },
  created() {
  },
  methods: {
    // 获取disabled状态
    getDisabled() {
      let { refDisabled } = this.setting
      let model = this.data.model
      if (refDisabled[model]) {
        return true
      }
      if (!refDisabled[model]) {
        return this.data.options['disabled'] || false
      }
      if (Object.prototype.toString.call(refDisabled[model]) === '[object Function]') {
        return refDisabled[model](model, this.models)
      }
    },
    // 添加事件v-bind
    getEvents() {
      let events = this.setting.events || {}
      return events[this.data.model]
    }
  }
}
module.exports = mixins
