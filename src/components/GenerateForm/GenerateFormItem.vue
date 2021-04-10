<template>
  <div class="">
    <!-- title -->
    <template v-if="data && data.type === 'text'"> </template>
    <!-- table -->
    <template v-else-if="data && data.type === 'table'"> </template>
    <!-- 组件判断 -->
    <template v-else>
      <el-form-item
        :label="data.label"
        :prop="data.prop"
        :class="data.className"
        :required="data.options.required"
        :label-width="data.options.labelWidth + 'px'"
        v-if="vIfShow()"
      >
        <!-- input -->
        <input-item
          class="widget-form-item"
          v-if="data.type === 'input'"
          :data="data"
          :models="models"
        ></input-item>
        <!-- inputNumber -->
        <input-number-item
          class="widget-form-item"
          v-if="data.type === 'inputNumber'"
          :data="data"
          :models="models"
        ></input-number-item>
        <!-- autocomplete -->
        <autocomplete-item
          class="widget-form-item"
          v-if="data.type === 'autocomplete'"
          :data="data"
          :models="models"
        ></autocomplete-item>
        <!-- select -->
        <select-item
          class="widget-form-item"
          v-if="data.type === 'select'"
          :data="data"
          :models="models"
        ></select-item>
        <!-- radio -->
        <radio-item
          class="widget-form-item"
          v-if="data.type === 'radio'"
          :data="data"
          :models="models"
        ></radio-item>
        <!-- checkBox -->
        <check-box-item
          class="widget-form-item"
          v-if="data.type === 'checkBox'"
          :data="data"
          :models="models"
        ></check-box-item>
        <!-- cascader -->
        <cascader-item
          class="widget-form-item"
          v-if="data.type === 'cascader'"
          :data="data"
          :models="models"
        ></cascader-item>
        <switch-item
          class="widget-form-item"
          v-if="data.type === 'switch'"
          :data="data"
          :models="models"
        ></switch-item>
        <slider-item
          class="widget-form-item"
          v-if="data.type === 'slider'"
          :data="data"
          :models="models"
        ></slider-item>
        <time-picker-item
          class="widget-form-item"
          v-if="data.type === 'timePicker'"
          :data="data"
          :models="models"
        ></time-picker-item>
      </el-form-item>
    </template>
    <template> </template>
    <template> </template>
  </div>
</template>

<script>
import InputItem from "./GenerateItem/Input";
import InputNumberItem from "./GenerateItem/InputNumber";
import AutocompleteItem from "./GenerateItem/Autocomplete";
import SelectItem from "./GenerateItem/Select";
import RadioItem from "./GenerateItem/Radio";
import CheckBoxItem from "./GenerateItem/CheckBox";
import CascaderItem from "./GenerateItem/Cascader";
import SwitchItem from "./GenerateItem/Switch";
import SliderItem from "./GenerateItem/Slider";
import TimePickerItem from "./GenerateItem/TimePicker";

export default {
  name: "GenerateFormItem",
  inject: {
    setting: {
      from: "setting",
      default: {},
    },
  },
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
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    models: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      // dataModel: this.models[this.data.model]
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * 组件是否显示
     * setting中：refDisplay
     * this.data
     */
    vIfShow() {
      // this.settting中设置的
      let { refDisplay } = this.setting;
      let data = this.data;
      // refDisplay中没有填写的，默认显示
      if (!refDisplay[data.model]) {
        return true;
      }
      // 如果setting中是函数，就执行函数，传值（这里传值，setting中就可以获取值了）
      if (
        Object.prototype.toString.call(refDisplay[data.model]) ===
        "[Object Function]"
      ) {
        // 执行这个函数，并且返回model，便于调用的地方获取数据
        return refDisplay[data.model](data.model, this.models);
      }
      // 也可以是：${dataModel.calculateType} === 1 - 这种字符串，我们这里去执行（eval）
    },
  },
};
</script>

<style lang="scss" scoped>
.widget-form-item {
  position: relative;
}
</style>