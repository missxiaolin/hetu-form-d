<template>
  <div class="">
    <el-checkbox-group
      v-model="data.options.defaultValue"
      :size="data.options.size"
      :disabled="itemDisabled"
      :min="data.options.min"
      :max="data.options.max"
      :text-color="data.options.textColor"
      :fill="data.options.fill"
      v-on="itemEvents"
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
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "CheckBox",
  mixins: [mixins],
  // 接收stting
  inject: ["setting"],
  components: {
    Masking,
  },
  props: {
    data: {},
    models: {},
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {
    this.itemDisabled = this.getDisabled();
    this.itemEvents = this.getEvents();
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
