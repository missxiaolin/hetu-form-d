<template>
  <div class="">
    <el-input
      v-model="data.options.defaultValue"
      :style="{ width: data.options.width }"
      :type="data.options.type"
      :maxlength="data.options.maxlength"
      :minlength="data.options.minlength"
      :show-word-limit="data.options.showWordLimit"
      :placeholder="data.options.placeholder"
      :clearable="data.options.clearable"
      :show-password="data.options.showPassword"
      :disabled="itemDisabled"
      :size="data.options.size"
      :prefix-icon="data.options.prefixIcon"
      :suffix-icon="data.options.suffixIcon"
      :rows="data.options.rows"
      :autosize="data.options.autosize"
      :autocomplete="data.options.autocomplete"
      :name="data.options.name"
      :readonly="data.options.readonly"
      :max="data.options.max"
      :min="data.options.min"
      :step="data.options.step"
      :resize="data.options.resize"
      :autofocus="data.options.autofocus"
      :form="data.options.form"
      :label="data.options.label"
      :tabindex="data.options.tabindex"
      :validate-event="data.options.validateEvent"
      v-on="itemEvents"
    >
    </el-input>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import mixins from "./mixins";
import Masking from "./Masking";
export default {
  name: "Input",
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
    console.log(this.itemDisabled);
    this.itemEvents = this.getEvents();
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
