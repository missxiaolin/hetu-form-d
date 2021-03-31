<template>
  <div class="">
    <Dialog title="功能介绍" v-model="visible" :loading="loading">
      <ul>
        <li>Element-UI Form 表单快速构建工具</li>
        <li>支持表单 Form Attributes 属性</li>
        <li>支持组件 Attributes 属性</li>
        <li>支持组件 Events 事件</li>
      </ul>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "Readme",
  components: {
    Dialog,
  },
  props: {},
  data() {
    return {
      visible: false,
      loading: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    show() {
      this.visible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
