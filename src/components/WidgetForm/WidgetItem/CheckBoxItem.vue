<template>
  <div class="">
    <el-checkbox-group
      v-model="data.options.defaultValue"
      :size="data.options.size"
      :disabled="data.options.disabled"
      :min="data.options.min"
      :max="data.options.max"
      :text-color="data.options.textColor"
      :fill="data.options.fill"
    >
      <template v-if="data.options.isButton">
        <el-checkbox-button
          v-for="(item, index) in data.options.boxList"
          :key="index"
          :label="item.label"
          :true-label="item.trueLabel"
          :false-label="item.falseLabel"
          :disabled="item.disabled"
          :checked="item.checked"
          >{{ item.text }}</el-checkbox-button
        >
      </template>
      <template v-else>
        <el-checkbox
          v-for="(item, index) in data.options.boxList"
          :key="index"
          :label="item.label"
          :true-label="item.trueLabel"
          :false-label="item.falseLabel"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          :name="item.name"
          :checked="item.checked"
          :indeterminate="item.indeterminate"
          >{{ item.text }}</el-checkbox
        >
      </template>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckBoxItem",
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
<style lang="less" scoped>
</style>
