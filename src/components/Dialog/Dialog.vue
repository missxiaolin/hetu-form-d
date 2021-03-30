<template>
  <el-dialog v-bind="bindProps" :visible.sync="visible">
    <!-- 头部 -->
    <div slot="title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <!-- form -->
    <el-form
      v-if="isForm"
      v-bind="bindProps"
      :model="formModel"
      :rules="formRules"
    >
      <slot name="form"></slot>
    </el-form>
    <!-- 内容 -->
    <slot v-if="!isForm"></slot>
    <!-- footer -->
    <template v-if="showBtns">
      <!-- 底部-自定义 -->
      <div slot="footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
      <!-- 底部-系统 -->
      <div slot="footer" v-else>
        <el-button v-if="cancelText" @click="_cancelFunc">{{
          cancelText
        }}</el-button>
        <el-button
          type="primary"
          v-if="confirmText"
          @click="_confirmFunc"
          :loading="loadingStatus"
          >{{ confirmText }}</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script>
function noop() {}
export default {
  name: "Dialog",
  components: {},
  props: {
    // 是否显示dialog
    value: {
      type: Boolean,
      required: true,
      default: true,
    },
    // 是否显示底部Button
    showBtns: {
      type: Boolean,
      default: true,
    },
    // 取消按钮文字-传递了就会显示按钮
    cancelText: {
      type: [String, Boolean],
      default: "取消",
    },
    // 取消按钮调用的方法
    cancelFunc: {
      type: Function,
      default: noop,
    },
    // 确定按钮文字-传递了就会显示按钮
    confirmText: {
      type: [String, Boolean],
      default: "确定",
    },
    // 确认按钮调用的方法
    confirmFunc: {
      type: Function,
      default: noop,
    },
    // 是否是form模式
    isForm: {
      type: Boolean,
      default: false,
    },
    // from 数据
    formModel: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // form 规则
    formRules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.value,
      bindProps: { ...this.$attrs, ...this._props },
      loadingStatus: this.loading,
    };
  },
  watch: {
    visible(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.visible = val;
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 点击cancel
    _cancelFunc() {
      // 取消选中会触发方法
      this.cancelFunc && this.cancelFunc();
      this.visible = false;
    },
    _confirmFunc() {
      this.confirmFunc && this.confirmFunc();
      this.visible = false;
    },
    _close() {
      this.loadingStatus = false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
