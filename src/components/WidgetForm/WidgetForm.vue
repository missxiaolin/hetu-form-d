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
      <vuedraggable
        style="min-height: 800px"
        v-model="data.list"
        v-bind="{ group: 'people', ghostClass: 'ghost' }"
        @add="handleWidgetAdd"
      >
        <div v-for="(item, index) in (data.list || [])" :key="index" class="vuedraggableitem">
          <template v-if="item.type === 'grid' || item.type === 'panel'">
            <widget-form-col
              :key="item.key"
              :element.sync="item">
            </widget-form-col>
          </template>
          <template v-else>
            <widget-form-item
              :element.sync="item"
              ></widget-form-item>
          </template>
        </div>
      </vuedraggable>
    </el-form>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";
import { addDraggerWidget } from "../tool/magicGenerate";
// 常规组件
import WidgetFormItem from "./WidgetFormItem.vue";
// 布局组件
import WidgetFormCol from "./WidgetFormCol.vue";

export default {
  name: "WidgetForm",
  props: {
    // data 数据
    data: {},
  },
  components: {
    WidgetFormItem,
    vuedraggable
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleWidgetAdd ({ newIndex, element }) {
      let returnItem = addDraggerWidget(this.data.list[newIndex])
      console.log(returnItem)
    },
  },
};
</script>

<style lang="scss">
</style>