<template>
  <div class="">
    <el-form-item label="绑定值（v-model）">
      <el-input-number
        v-model="data.options.defaultValue"
        :max="data.options.max"
        :min="0"
        :step="0.5"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否允许半选（allow-half）">
      <el-radio-group v-model="data.options.allowHalf">
        <el-radio :label="true">允许</el-radio>
        <el-radio :label="false">不允许</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="低分和中等分数的界限值，值本身被划分在低分中（low-threshold）"
    >
      <el-input-number
        v-model="data.options.lowThreshold"
        :max="data.options.max"
        :min="0"
        :step="0.5"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      label="	高分和中等分数的界限值，值本身被划分在高分中（high-threshold）"
    >
      <el-input-number
        v-model="data.options.highThreshold"
        :max="data.options.max"
        :min="data.options.lowThreshold"
        :step="0.5"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="icon 的颜色（colors）">
      <div style="color: red">
        若传入数组，共有 3 个元素，为 3
        个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色
      </div>
      <div>
        <el-radio-group v-model="colorsIsArray">
          <el-radio :label="true">数组</el-radio>
          <el-radio :label="false">对象</el-radio>
        </el-radio-group>
      </div>
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
      colorsIsArray: false,
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
</style>
