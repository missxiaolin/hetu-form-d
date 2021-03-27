<template>
  <div class="">
    <el-switch
      v-model="data.options.defaultValue"
      :disabled="data.options.disabled"
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
    >
    </el-switch>
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
