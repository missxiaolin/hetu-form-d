<template>
  <div class>
    <!-- 样式：issys -->
    <el-form-item
      label="组件另添加类名（className）"
      v-if="!data.issys"
      style="width: 200px"
    >
      <el-input v-model="data.className"></el-input>
    </el-form-item>
    <!-- prop -->
    <el-form-item label="Prop" style="width: 200px" v-if="data.type !== 'grid'">
      <el-input v-model="data.prop"></el-input>
    </el-form-item>
    <!-- 标题 -->
    <el-form-item
      label="标题（label）"
      style="width: 200px"
      v-if="data.type !== 'grid'"
    >
      <el-input v-model="data.label"></el-input>
    </el-form-item>
    <!-- 单个表单域标签的的宽度 -->
    <el-form-item label="单个表单域标签的的宽度（label-width）">
      <el-input-number v-model="data.labelWidth"></el-input-number>
    </el-form-item>
    <!-- 是否必选 -->
    <el-form-item label="是否必选（required）">
      <el-radio-group v-model="data.required">
        <el-radio :label="true">必选</el-radio>
        <el-radio :label="false">非必选</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: "BaseItem",
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
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
</style>
