<template>
  <div v-if="data">
      <el-form
      :class="(data.config || {}).className"
      :inline="(data.config || {}).inline"
      :label-position="(data.config || {}).labelPosition || 'left'"
      :label-width="(data.config || {}).labelWidth + 'px'"
      :label-suffix="(data.config || {}).labelSuffix"
      :hide-required-asterisk="(data.config || {}).hideRequiredAsterisk"
      :show-message="(data.config || {}).showMessage"
      :inline-message="(data.config || {}).inlineMessage"
      :status-icon="(data.config || {}).statusIcon"
      :validate-on-rule-change="(data.config || {}).validateOnRuleChange"
      :size="(data.config || {}).size || 'small'"
      :disabled="(data.config || {}).disabled"
      >
      </el-form>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
import { addDraggerWidget } from '../tool/magicGenerate'
// 常规组件
import WidgetFormItem from './WidgetFormItem.vue'

export default {
  name: "WidgetForm",
  props: {
    // data 数据
    data: {},
  },
  components: {
      WidgetFormItem
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

<style lang="scss">
</style>