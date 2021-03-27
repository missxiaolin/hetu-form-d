<template>
  <div class="">
    <el-color-picker
      v-model="data.options.defaultValue"
      :disabled="data.options.disabled"
      :size="data.options.size"
      :show-alpha="data.options.showAlpha"
      :color-format="data.options.colorFormat"
      :popper-class="data.options.popperClass"
      :predefine="data.options.predefine"
    >
    </el-color-picker>
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
