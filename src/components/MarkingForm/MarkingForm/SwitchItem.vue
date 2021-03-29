<template>
  <div class="switch-item">
    <div class="value">
      <div>类型：{{ typeof data.options.defaultValue }}</div>
      <div>值：{{ data.options.defaultValue }}</div>
    </div>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="switch 的宽度（像素）-- 目前无法动态绑定（width）">
      <el-input-number
        v-model="data.options.width"
        :min="0"
        :max="9999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      label="switch 打开时所显示图标的类名，设置此项会忽略 active-text（active-icon-class）"
    >
      <el-input v-model="data.options.activeIconClass"></el-input>
    </el-form-item>
    <el-form-item
      label="switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text（inactive-icon-class）"
    >
      <el-input v-model="data.options.inactiveIconClass"></el-input>
    </el-form-item>
    <el-form-item label="switch 打开时的文字描述（active-text）">
      <el-input v-model="data.options.activeText"></el-input>
    </el-form-item>
    <el-form-item label="switch 关闭时的文字描述（inactive-text）">
      <el-input v-model="data.options.inactiveText"></el-input>
    </el-form-item>
    <el-form-item label="switch 打开时的值（active-value）">
      <el-radio-group v-model="data.options.activeValue">
        <el-radio :label="true">true</el-radio>
        <el-radio :label="false">false</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="switch 关闭时的值（inactive-value）">
      <el-radio-group v-model="data.options.inactiveValue">
        <el-radio :label="true">true</el-radio>
        <el-radio :label="false">false</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="switch 打开时的背景色（active-color）">
      <el-color-picker v-model="data.options.activeColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="switch 关闭时的背景色（inactive-color）">
      <el-color-picker v-model="data.options.inactiveColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="switch 对应的 name 属性（name）">
      <el-input v-model="data.options.name"></el-input>
    </el-form-item>
    <el-form-item
      label="改变 switch 状态时是否触发表单的校验（validate-event）"
    >
      <el-radio-group v-model="data.options.validateEvent">
        <el-radio :label="true">触发</el-radio>
        <el-radio :label="false">不触发</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      coreWidth: this.data.options.width,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.switch-item {
  .value {
    margin-top: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
