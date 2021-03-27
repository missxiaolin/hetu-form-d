<template>
  <div class="">
    <el-rate
      v-model="data.options.defaultValue"
      :max="data.options.max"
      :disabled="data.options.disabled"
      :allow-half="data.options.allowHalf"
      :low-threshold="data.options.lowThreshold"
      :high-threshold="data.options.lowThreshold"
      :colors="data.options.colors"
      :void-color="data.options.voidColor"
      :disabled-void-color="data.options.disabledVoidColor"
      :icon-classes="data.options.iconClasses"
      :void-icon-class="data.options.voidIconClass"
      :disabled-void-icon-class="data.options.disabledVoidIconClass"
      :show-text="data.options.showText"
      :show-score="data.options.showScore"
      :text-color="data.options.textColor"
      :texts="data.options.texts"
      :score-template="data.options.scoreTemplate"
    >
    </el-rate>
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
