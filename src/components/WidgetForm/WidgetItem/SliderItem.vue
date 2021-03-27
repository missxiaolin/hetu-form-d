<template>
  <div class="">
    <el-slider
      v-model="data.options.defaultValue"
      :min="data.options.min"
      :max="data.options.max"
      :disabled="data.options.disabled"
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
      :marks="data.options.marks"
    >
    </el-slider>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
