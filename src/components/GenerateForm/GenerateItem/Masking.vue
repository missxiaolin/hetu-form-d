<template>
  <div class="masking" @click.prevent.stop="getDisabledFn()"></div>
</template>
<script>
export default {
  name: "Masking",
  components: {},
  mixins: [],
  // 接收stting
  inject: ["setting"],
  props: {
    data: {},
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getDisabledFn() {
      let { refDisabledFunc } = this.setting;
      let model = this.data.model;
      if (refDisabledFunc[model]) {
        if (
          Object.prototype.toString.call(refDisabledFunc[model]) ===
          "[object Function]"
        ) {
          return refDisabledFunc[model](model, this.models);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.masking {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
