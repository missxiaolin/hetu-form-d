<template>
  <div class="">
    <template v-if="data.options.isPanel">
      <el-cascader-panel
        v-model="data.options.defaultValue"
        :options="data.options.options"
        :props="data.options.props"
      >
      </el-cascader-panel>
    </template>
    <template v-if="!data.options.isPanel">
      <el-cascader
        v-model="data.options.defaultValue"
        :options="data.options.options"
        :props="data.options.props"
        :size="data.options.size"
        :placeholder="data.options.placeholder"
        :disabled="data.options.disabled"
        :clearable="data.options.clearable"
        :show-all-levels="data.options.showAllLevels"
        :collapse-tags="data.options.collapseTags"
        :separator="data.options.separator"
        :filterable="data.options.filterable"
        :debounce="data.options.debounce"
        :popper-class="data.options.popperClass"
      >
      </el-cascader>
    </template>
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
  created() {
    this.loadData();
  },
  mounted() {},
  methods: {
    loadData() {
      this.axios({
        method: "get",
        url: "http://api.xuefeng6.com/getRegion",
      }).then((res) => {
        if (res.data.data) {
          this.data.options.options = res.data.data;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>
