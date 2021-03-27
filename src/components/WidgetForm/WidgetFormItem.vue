<template>
  <div class="widgetFormItem">
    <!-- title -->
    <div v-if="data && data.type === 'text'">text</div>
    <!-- table -->
    <div v-if="data && data.type === 'table'">table</div>
    <!-- 组件判断 -->
    <div v-else>
      <el-form-item
        v-if="data && data.key"
        :class="data.attr.className"
        prop="data.attr.prop"
        :label="data.attr.label"
        :label-width="data.attr.labelWidth + 'px'"
        :required="data.attr.required"
        @click.native.stop="handleSelectWidget"
      >
        <!-- 输入框：input -->
        <input-item v-if="data.type === 'input'" :data="data"></input-item>
        <!-- 计步器：number -->
        <input-number-item
          v-if="data.type === 'inputNumber'"
          :data="data"
        ></input-number-item>
        <!-- 远程搜索：autocomplete -->
        <autocomplete-item
          v-if="data.type === 'autocomplete'"
          :data="data"
        ></autocomplete-item>
        <!-- 下拉：select -->
        <select-item v-if="data.type === 'select'" :data="data"></select-item>
        <!-- 单选框：radio -->
        <radio-item v-if="data.type === 'radio'" :data="data"></radio-item>
        <!-- checkbox -->
        <check-box-item
          v-if="data.type === 'checkBox'"
          :data="data"
        ></check-box-item>
        <!-- cascader -->
        <cascader-item
          v-if="data.type === 'cascader'"
          :data="data"
        ></cascader-item>
        <!-- switch -->
        <switch-item v-if="data.type === 'switch'" :data="data"></switch-item>
        <!-- slide -->
        <slider-item v-if="data.type === 'slider'" :data="data"></slider-item>

        <time-picker-item v-if="data.type === 'timePicker'" :data="data"></time-picker-item>
        <color-picker-item v-if="data.type === 'colorPicker'" :data="data"></color-picker-item>
        <rate-item v-if="data.type === 'rate'" :data="data"></rate-item>
      </el-form-item>
    </div>
  </div>
</template>

<script>
import InputItem from "./WidgetItem/InputItem";
import InputNumberItem from "./WidgetItem/InputNumberItem";
import AutocompleteItem from "./WidgetItem/AutocompleteItem";
import SelectItem from "./WidgetItem/SelectItem";
import RadioItem from "./WidgetItem/RadioItem";
import CheckBoxItem from "./WidgetItem/CheckBoxItem";
import CascaderItem from "./WidgetItem/CascaderItem";
import SwitchItem from "./WidgetItem/SwitchItem";
import SliderItem from "./WidgetItem/SliderItem";
import TimePickerItem from "./WidgetItem/TimePickerItem";
import ColorPickerItem from "./WidgetItem/ColorPickerItem";
import RateItem from "./WidgetItem/RateItem";

export default {
  name: "WidgetFormItem",
  components: {
    InputItem,
    InputNumberItem,
    AutocompleteItem,
    SelectItem,
    RadioItem,
    CheckBoxItem,
    CascaderItem,
    SwitchItem,
    SliderItem,
    TimePickerItem,
    ColorPickerItem,
    RateItem,
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      data: this.element,
    };
  },
  watch: {
    // 监听数据，赋值给data，否则拖拽过来数据不会重新添加和渲染
    element: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectWidget() {
      this.$store.commit("set_selectWidget", this.data);
    },
  },
};
</script>