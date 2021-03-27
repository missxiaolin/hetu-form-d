<template>
  <div class="">
    <el-input-number
      v-model="data.options.defaultValue"
      :min="data.options.min"
      :max="data.options.max"
      :step="data.options.step"
      :step-strictly="data.options.stepStrictly"
      :precision="data.options.precision"
      :size="data.options.size"
      :disabled="data.options.disabled"
      :controls="data.options.controls"
      :controls-position="data.options.controlsPosition"
      :name="data.options.name"
      :label="data.options.label"
      :placeholder="data.options.placeholder"
    >
    </el-input-number>
  </div>
</template>
<script>
import mixins from "./mixins";
export default {
  name: "InputNumberItem",
  components: {},
  mixins: [mixins],
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
