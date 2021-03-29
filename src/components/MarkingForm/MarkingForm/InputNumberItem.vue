<template>
  <div>
    <el-form-item label="绑定值（v-model）">
      <el-input-number v-model="data.options.defaultValue"></el-input-number>
    </el-form-item>
    <el-form-item label="设置计数器允许的最小值（min）">
      <el-input-number v-model="data.options.min"></el-input-number>
    </el-form-item>
    <el-form-item label="设置计数器允许的最大值（max）">
      <el-input-number v-model="data.options.max"></el-input-number>
    </el-form-item>
    <el-form-item label="计数器步长（step）">
      <el-input-number v-model="data.options.step"></el-input-number>
    </el-form-item>
    <el-form-item label="是否只能输入 step 的倍数（stepStrictly）">
      <el-radio-group v-model="data.options.stepStrictly">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="数值精度（precision）">
      <el-input-number v-model="data.options.precision"></el-input-number>
    </el-form-item>
    <el-form-item label="计数器尺寸（size）">
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="large">large</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用计数器（disabled）">
      <el-radio-group v-model="data.options.disabled"></el-radio-group>
      <el-radio :label="true">禁用</el-radio>
      <el-radio :label="false">不禁用</el-radio>
    </el-form-item>
    <el-form-item label="是否使用控制按钮（controls）">
      <el-radio-group v-model="data.options.controls">
        <el-radio :label="true">使用</el-radio>
        <el-radio :label="false">不使用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="控制按钮位置（controls-position）">
      <el-radio-group v-model="data.options.controlsPosition">
        <el-radio-button label="right">right</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性（name）">
      <el-input v-model="data.options.name"></el-input>
    </el-form-item>
    <el-form-item label="输入框关联的label文字（label）">
      <el-input v-model="data.options.label"></el-input>
    </el-form-item>
    <el-form-item label="输入框默认 placeholder（placeholder）">
      <el-input v-model="data.options.placeholder"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "InputNumberItem",
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
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
