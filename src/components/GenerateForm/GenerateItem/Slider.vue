<template>
  <div class="">
    <el-slider
      v-model="data.options.defaultValue"
      :min="data.options.min"
      :max="data.options.max"
      :disabled="itemDisabled"
      :step="data.options.step"
      :show-input="data.options.showInput"
      :show-input-controls="data.options.showInputControls"
      :input-size="data.options.inputSize"
      :show-stops="data.options.showStops"
      :show-tooltip="data.options.showTooltip"
      :range="data.options.range"
      :vertical="data.options.vertical"
      :height="data.options.height"
      :label="data.options.label"
      :debounce="data.options.debounce"
      :tooltip-class="data.options.tooltipClass"
      :marks="getMarks()"
      v-on="itemEvents">
    </el-slider>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import Masking from './Masking'
import mixins from './mixins'
export default {
  name: 'Slide',
  // 接收stting
  inject: ['setting'],
  mixins: [mixins],
  components: {
    Masking
  },
  props: {
    data: {},
    models: {}
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  created () {
    this.itemDisabled = this.getDisabled()
    this.itemEvents = this.getEvents()
  },
  mounted () {
  },
  methods: {
    getMarks () {
      let events = this.setting.events || {}
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty('marks')) {
          return events[this.data.model]['marks']
        } else {
          console.error('[警告] 如果使用 marks 属性，请在 setting 中根据 model 添加 marks 方法')
          return {}
        }
      } else {
        console.error('[警告] 如果使用 marks 属性，请在 setting 中根据 model 添加 marks 方法')
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
