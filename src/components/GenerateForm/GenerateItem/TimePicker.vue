<template>
  <div class="">
    <template v-if="data.options.isSelect">
      <el-time-select
        v-model="data.options.defaultValue"
        :picker-options="data.options.selectOptions"
        :readonly="data.options.readonly"
        :disabled="itemDisabled"
        :editable="data.options.editable"
        :clearable="data.options.clearable"
        :size="data.options.size"
        :placeholder="data.options.placeholder"
        :start-placeholder="data.options.startPlaceholder"
        :end-placeholder="data.options.endPlaceholder"
        :is-range="data.options.isRange"
        :arrow-control="data.options.arrowControl"
        :align="data.options.align"
        :popper-class="data.options.popperClass"
        :range-separator="data.options.rangeSeparator"
        :value-format="data.options.valueFormat"
        :default-value="data.options['default-value']"
        :name="data.options.name"
        :prefix-icon="data.options.prefixIcon"
        :clear-icon="data.options.clearIcon"
        v-on="itemEvents"
      >
      </el-time-select>
    </template>
    <template v-else>
      <el-time-picker
        v-model="data.options.defaultValue"
        :picker-options="data.options.pickerOptions"
        :readonly="data.options.readonly"
        :disabled="data.options.disabled"
        :editable="data.options.editable"
        :clearable="data.options.clearable"
        :size="data.options.size"
        :placeholder="data.options.placeholder"
        :start-placeholder="data.options.startPlaceholder"
        :end-placeholder="data.options.endPlaceholder"
        :is-range="data.options.isRange"
        :arrow-control="data.options.arrowControl"
        :align="data.options.align"
        :popper-class="data.options.popperClass"
        :range-separator="data.options.rangeSeparator"
        :value-format="data.options.valueFormat"
        :default-value="data.options['default-value']"
        :name="data.options.name"
        :prefix-icon="data.options.prefixIcon"
        :clear-icon="data.options.clearIcon"
        v-on="itemEvents"
      >
      </el-time-picker>
    </template>
  </div>
</template>
<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "TimePicker",
  components: {
    Masking,
  },
  // 接收stting
  inject: ["setting"],
  mixins: [mixins],
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
