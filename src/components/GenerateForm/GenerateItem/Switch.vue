<template>
  <div class="">
    <el-switch
      v-model="data.options.defaultValue"
      :disabled="itemDisabled"
      :width="data.options.width"
      :active-icon-class="data.options.activeIconClass"
      :inactive-icon-class="data.options.inactiveIconClass"
      :active-text="data.options.activeText"
      :inactive-text="data.options.inactiveText"
      :active-value="data.options.activeValue"
      :inactive-value="data.options.inactiveValue"
      :active-color="data.options.activeColor"
      :inactive-color="data.options.inactiveColor"
      :name="data.options.name"
      :validate-event="data.options.validateEvent"
      v-on="itemEvents"
    >
    </el-switch>
    <Masking v-if="itemDisabled" :data="data"></Masking>
  </div>
</template>
<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "SwitchItem",
  // 接收stting
  inject: ["setting"],
  mixins: [mixins],
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
