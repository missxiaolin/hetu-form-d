<template>
  <div class="">
    <el-dialog
      :visible.sync="visbile"
      title="预览"
      center
      :close-on-click-modal="false"
      destroy-on-close
      width="1200px"
    >
      <!-- 预览 -->
      <GenerateForm :data="widgetForm" :setting="setting"></GenerateForm>
    </el-dialog>
  </div>
</template>

<script>
import GenerateForm from "../GenerateForm/GenerateForm.vue";
export default {
  name: "CustomDialog",
  // 接收stting
  inject: ["setting"],
  components: {
    GenerateForm,
  },
  props: {
    widgetForm: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      visbile: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    show() {
      this.visbile = true;
    },
  },
};
</script>