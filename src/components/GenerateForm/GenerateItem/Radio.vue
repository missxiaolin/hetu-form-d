<template>
  <div class="">
    <el-radio-group
      v-model="data.options.defaultValue"
      :size="data.options.size"
      :disabled="itemDisabled"
      :text-color="data.options.textColor"
      :fill="data.options.fill"
      v-on="itemEvents"
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
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "Radio",
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
