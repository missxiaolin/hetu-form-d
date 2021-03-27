<template>
  <div v-if="show">
    <el-form label-position="top">
      <el-collapse v-model="activeName" accordion>
        <!-- model -->
        <div>
          <el-form-item label="model（model不允许重复）">
            <el-input v-model="data.model" style="width: 300px"></el-input>
          </el-form-item>
        </div>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
import { deepClone } from "../tool/tool";

export default {
  name: "MarkingWidgetConfig",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      // 折叠面板
      activeName: "",
      // 是否删除栅格
      deleteColVisible: false,
      deleteItem: {
        list: [],
      },
      // 删除弹窗v-model
      deleteAttr: {},
    };
  },
  watch: {},
  computed: {
    show() {
        console.log(this.data)
      if (this.data && Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.dataCopy = deepClone(this.data);
  },
};
</script>