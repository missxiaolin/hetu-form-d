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
      :disabled="itemDisabled"
      :controls="data.options.controls"
      :controls-position="data.options.controlsPosition"
      :name="data.options.name"
      :label="data.options.label"
      :placeholder="data.options.placeholder"
      v-on="itemEvents"
    >
    </el-input-number>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import mixins from "./mixins";
import Masking from "./Masking";
export default {
  name: "InputNumber",
  // 接收stting
  inject: ["setting"],
  mixins: [mixins],
  components: {
    Masking,
  },
  props: {
    data: {},
    models: {},
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {
    this.itemDisabled = this.getDisabled();
    this.itemEvents = this.getEvents();
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
