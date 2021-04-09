<template>
  <div class="">
    <el-autocomplete
      v-model="data.options.defaultValue"
      :placeholder="data.options.placeholder"
      :disabled="itemDisabled"
      :value-key="data.options.valueKey"
      :value="data.options.value"
      :debounce="data.options.debounce"
      :placement="data.options.placement"
      :popper-class="data.options.popperClass"
      :trigger-on-focus="data.options.triggerOnFocus"
      :name="data.options.name"
      :select-when-unmatched="data.options.selectWhenUnmatched"
      :label="data.options.label"
      :prefix-icon="data.options.prefixIcon"
      :suffix-icon="data.options.suffixIcon"
      :hide-loading="data.options.hideLoading"
      :popper-append-to-body="data.options.popperAppendToBody"
      :highlight-first-item="data.options.highlightFirstTtem"
      v-on="itemEvents"
      :fetch-suggestions="getFetchSuggestions()"
    >
    </el-autocomplete>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import mixins from "./mixins";
import Masking from "./Masking";
export default {
  name: "Autocomplete",
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
  methods: {
    getFetchSuggestions() {
      let events = this.setting.events || {};
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty("fetch-suggestions")) {
          return events[this.data.model]["fetch-suggestions"];
        } else {
          console.error(
            "[警告] 远程搜索组件使用必须在 setting 中根据 model 添加 fetch-suggestions 方法"
          );
          return this.fn;
        }
      } else {
        console.error(
          "[警告] 远程搜索组件使用必须在 setting 中根据 model 添加 fetch-suggestions 方法"
        );
        return this.fn;
      }
    },
    fn() {},
  },
};
</script>
<style lang="scss" scoped>
.widget-form-item {
  position: relative;
}
</style>
