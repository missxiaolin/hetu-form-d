<template>
  <div class="">
    <el-radio-group
      v-model="data.options.defaultValue"
      :size="data.options.size"
      :disabled="data.options.disabled"
      :text-color="data.options.textColor"
      :fill="data.options.fill"
    >
      <template v-if="data.options.isButton">
        <el-radio-button
          v-for="(item, index) in data.options.radioList"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          :name="item.name"
          >{{ item.text }}</el-radio-button
        >
      </template>
      <template v-else>
        <el-radio
          v-for="(item, index) in data.options.radioList"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          :name="item.name"
          >{{ item.text }}</el-radio
        >
      </template>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioItem",
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
