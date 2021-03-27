<template>
  <div v-if="show">
    <el-alert
      title=""
      type="success"
      description="由于Element-UI限制，这里只能设置整个Form的 Form Attributes 属性"
      show-icon
    >
    </el-alert>
    <el-form label-position="top" size="medium">
      <!-- 自定义类名 -->
      <el-form-item label="表单自定义类名" style="width: 200px">
        <el-input v-model="data.className"></el-input>
      </el-form-item>
      <!-- 是否行内样式 -->
      <el-form-item label="行内表单模式">
        <el-radio-group v-model="data.inline">
          <el-radio :label="true">行内</el-radio>
          <el-radio :label="false">非行内</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 标签对其方式 -->
      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="data.labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- 表单字段宽度 -->
      <el-form-item label="表单字段宽度">
        <el-input-number v-model="data.labelWidth"></el-input-number>
      </el-form-item>
      <!-- 表单域标签的后缀 -->
      <el-form-item label="表单域标签的后缀" style="width: 200px">
        <el-input v-model="data.labelSuffix"></el-input>
      </el-form-item>
      <!-- 是否显示必填字段的标签旁边的红色星号 -->
      <el-form-item label="是否显示必填字段的标签旁边的红色星号">
        <el-radio-group v-model="data.hideRequiredAsterisk">
          <el-radio :label="false">显示</el-radio>
          <el-radio :label="true">不显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 是否显示校验错误信息 -->
      <el-form-item label="是否显示校验错误信息">
        <el-radio-group v-model="data.showMessage">
          <el-radio :label="true">显示</el-radio>
          <el-radio :label="false">不显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 是否以行内形式展示校验信息 -->
      <el-form-item label="是否以行内形式展示校验信息">
        <el-radio-group v-model="data.inlineMessage">
          <el-radio :label="true">显示</el-radio>
          <el-radio :label="false">不显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 是否在输入框中显示校验结果反馈图标 -->
      <el-form-item label="是否在输入框中显示校验结果反馈图标">
        <el-radio-group v-model="data.statusIcon">
          <el-radio :label="true">显示</el-radio>
          <el-radio :label="false">不显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 是否在 rules 属性改变后立即触发一次验证 -->
      <el-form-item label="是否在 rules 属性改变后立即触发一次验证">
        <el-radio-group v-model="data.validateOnRuleChange">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">不是</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 是否禁用该表单内的所有组件 -->
      <el-form-item label="是否禁用该表单内的所有组件">
        <el-radio-group v-model="data.disabled">
          <el-radio :label="true">全部禁用</el-radio>
          <el-radio :label="false">不禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 表单内组件的尺寸 -->
      <el-form-item label="表单内组件的尺寸">
        <el-radio-group v-model="data.size">
          <el-radio-button label="medium"></el-radio-button>
          <el-radio-button label="small"></el-radio-button>
          <el-radio-button label="mini"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
  computed: {
    show() {
      if (this.data && Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
