<template>
  <div class="">
    <el-select
      v-model="data.options.defaultValue"
      :multiple="data.options.multiple"
      :disabled="itemDisabled"
      :value-key="data.options.valueKey"
      :size="data.options.size"
      :clearable="data.options.clearable"
      :collapse-tags="data.options.collapseTags"
      :multiple-limit="data.options.multipleLimit"
      :name="data.options.name"
      :autocomplete="data.options.autocomplete"
      :placeholder="data.options.placeholder"
      :filterable="data.options.filterable"
      :allow-create="data.options.allowCreate"
      :filter-method="getFilterMethod()"
      :remote="data.options.remote"
      :remote-method="getRemoteMethod()"
      :loading="data.options.loading"
      :loading-text="data.options.loadingText"
      :no-match-text="data.options.noMatchText"
      :no-data-text="data.options.noDataText"
      :popper-class="data.options.popperClass"
      :reserve-keyword="data.options.reserveKeyword"
      :default-first-option="data.options.defaultFirstOption"
      :popper-append-to-body="data.options.popperAppendToBody"
      :automatic-dropdown="data.options.automaticDropdown"
      v-on="itemEvents"
    >
      <template v-if="data.options.isGroup">
        <el-option-group
          v-for="group in optconfig.options"
          :key="group[optconfig.label]"
          :label="group[optconfig.label]"
          :disabled="group.disabled"
        >
          <el-option
            v-for="item in group.options"
            :key="item[optconfig.label]"
            :label="item[optconfig.label]"
            :value="item[optconfig.value]"
            :item="item.disabled"
          >
          </el-option>
        </el-option-group>
      </template>
      <template v-else>
        <el-option
          v-for="item in optconfig.options"
          :key="item[optconfig.label]"
          :label="item[optconfig.label]"
          :value="item[optconfig.value]"
          :item="item.disabled"
        >
        </el-option>
      </template>
    </el-select>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>

<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "Select",
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
  computed: {
    optconfig() {
      let { optList, optMap } = this.setting;
      let model = this.data.model;
      let options = optList[model] || [];
      if (optMap[model]) {
        let label = optMap[model].label || "label";
        let value = optMap[model].value || "value";
        return {
          options: options,
          label: label,
          value: value,
        };
      }
      // 没有指定，添加默认vue
      return {
        options: options,
        label: "label",
        value: "value",
      };
    },
  },
  created() {
    this.itemDisabled = this.getDisabled();
    this.itemEvents = this.getEvents();
  },
  mounted() {},
  methods: {
    getFilterMethod() {
      let events = this.setting.events || {};
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty("filter-method")) {
          return events[this.data.model]["filter-method"];
        } else {
          console.error(
            "[警告] select 使用自定义搜索方法，可以在 setting 中根据 model 添加 filter-method 方法即可"
          );
          return this.fn;
        }
      } else {
        console.error(
          "[警告] select 使用自定义搜索方法，可以在 setting 中根据 model 添加 filter-method 方法即可"
        );
        return this.fn;
      }
    },
    getRemoteMethod() {
      let events = this.setting.events || {};
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty("remote-method")) {
          return events[this.data.model]["remote-method"];
        } else {
          console.error(
            "[警告] select 使用自定义搜索方法，可以在 setting 中根据 model 添加 remote-method 方法即可"
          );
          return this.fn;
        }
      } else {
        console.error(
          "[警告] select 使用自定义搜索方法，可以在 setting 中根据 model 添加 remote-method 方法即可"
        );
        return this.fn;
      }
    },
    fn() {},
  },
};
</script>
<style lang="scss" scoped>
</style>
