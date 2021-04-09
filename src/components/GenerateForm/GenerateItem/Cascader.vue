<template>
  <div class="">
    <template v-if="data.options.isPanel">
      <el-cascader-panel
        v-model="data.options.defaultValue"
        :options="data.options.options"
        :props="data.options.props"
        v-on="itemEvents"
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
        :disabled="itemDisabled"
        :clearable="data.options.clearable"
        :show-all-levels="data.options.showAllLevels"
        :collapse-tags="data.options.collapseTags"
        :separator="data.options.separator"
        :filterable="data.options.filterable"
        :filter-method="getFilterMethod()"
        :debounce="data.options.debounce"
        :before-filter="getBeforeFilter()"
        :popper-class="data.options.popperClass"
        v-on="itemEvents"
      >
      </el-cascader>
      <Masking v-if="itemDisabled" :data="data"></Masking>
    </template>
  </div>
</template>
<script>
import Masking from "./Masking";
import mixins from "./mixins";
export default {
  name: "Cascader",
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
    this.loadData();
    this.addLazyFunc();
    this.itemDisabled = this.getDisabled();
    this.itemEvents = this.getEvents();
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
    addLazyFunc() {
      if (this.data.options.props.lazy) {
        // true-添加
        let events = this.setting.events || {};
        if (events.hasOwnProperty(this.data.model)) {
          if (events[this.data.model].hasOwnProperty("lazyLoad")) {
            return events[this.data.model]["lazyLoad"];
          } else {
            console.error(
              "[警告] Cascader 使用懒加载，可以在 setting 中根据 model 添加 lazyLoad 方法即可"
            );
            return this.fn;
          }
        } else {
          console.error(
            "[警告] Cascader 使用懒加载，可以在 setting 中根据 model 添加 lazyLoad 方法即可"
          );
          return this.fn;
        }
      }
    },
    getFilterMethod() {
      let events = this.setting.events || {};
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty("filter-method")) {
          return events[this.data.model]["filter-method"];
        } else {
          console.error(
            "[警告] Cascader 使用自定义搜索方法，可以在 setting 中根据 model 添加 filter-method 方法即可"
          );
          return this.fn;
        }
      } else {
        console.error(
          "[警告] Cascader 使用自定义搜索方法，可以在 setting 中根据 model 添加 filter-method 方法即可"
        );
        return this.fn;
      }
    },
    getBeforeFilter() {
      let events = this.setting.events || {};
      if (events.hasOwnProperty(this.data.model)) {
        if (events[this.data.model].hasOwnProperty("before-filter")) {
          return events[this.data.model]["before-filter"];
        } else {
          console.error(
            "[警告] Cascader 使用筛选之前的钩子方法，可以在 setting 中根据 model 添加 before-filter 方法即可"
          );
          return this.fn;
        }
      } else {
        console.error(
          "[警告] Cascader 使用筛选之前的钩子方法，可以在 setting 中根据 model 添加 before-filter 方法即可"
        );
        return this.fn;
      }
    },
    fn() {},
  },
};
</script>
<style lang="scss" scoped>
</style>
