<template>
  <div class="">
    <el-form
      ref="previewForm"
      :class="(data.config || {}).className"
      :inline="(data.config || {}).inline"
      :size="(data.config || {}).size || 'small'"
      :label-position="(data.config || {}).labelPosition || 'left'"
      :label-width="(data.config || {}).labelWidth + 'px'"
      :label-suffix="(data.config || {}).labelSuffix"
      :disabled="(data.config || {}).disabled"
      :hide-required-asterisk="(data.config || {}).hideRequiredAsterisk"
      :show-message="(data.config || {}).showMessage"
      :inline-message="(data.config || {}).inlineMessage"
      :status-icon="(data.config || {}).statusIcon"
      :validate-on-rule-change="(data.config || {}).validateOnRuleChange"
    >
      <template v-for="item in data.list">
        <!-- 栅格-gird -->
        <template v-if="item.type === 'grid'">
          <generate-form-col :data="item" :key="item.key"></generate-form-col>
        </template>
        <template v-else-if="item.type === 'panel'"> </template>
        <!-- 组件 -->
        <template v-else>
          <generate-form-item
            :key="item.key"
            :data="item"
            :models="models"
          ></generate-form-item>
        </template>
      </template>
    </el-form>
  </div>
</template>

<script>
import { getModelByJson } from "../tool/magicGenerate";
import { defaultPageJson } from "../tool/formConfig";
import GenerateFormItem from "./GenerateFormItem.vue";
import GenerateFormCol from "./GenerateFormCol.vue";
export default {
  name: "GenerateForm",
  // 接收setting
  inject: {
    setting: {
      from: "setting",
      default: {},
    },
  },
  components: {
    GenerateFormItem,
    GenerateFormCol,
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return defaultPageJson;
      },
    },
  },
  data() {
    return {
      visible: false,
      models: {},
    };
  },
  watch: {},
  computed: {},
  created() {
    this.setFormModels();
  },
  mounted() {},
  methods: {
    // 根据this.data 获取model
    setFormModels() {
      let { models, rules } = getModelByJson(this.data);
      this.models = models;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>