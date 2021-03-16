<template>
  <el-container class="fm2-container">
    <el-main style="padding: 20px 20px 0px 20px">
      <el-container class="fm2-main">
        <!-- 左侧组件 -->
        <el-aside class="markform-left">
          <div class="components-list">
            <span class="title">基础组件</span>
            <vuedraggable
              tag="ul"
              :list="basicComponents"
              :group="{ name: 'people', pull: 'clone', put: false }"
              :sort="false"
              :ghostClass="'ghost'"
            >
              <li
                class="form-edit-label"
                v-for="(item, index) in basicComponents"
                :key="index"
              >
                <a
                  :style="{
                    backgroundColor: item.backgroundColor,
                    textAlign: 'center',
                  }"
                  href="javascript:;"
                >
                  <i :class="setClass(item.icon)"></i>
                  {{ item.label }}</a
                >
              </li>
            </vuedraggable>
          </div>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
// 拖拽
import vuedraggable from "vuedraggable";
// 左边-配置
import { basicComponents } from "../tool/ConponentsConfig";

export default {
  name: "MarkingForm",
  components: {
      vuedraggable
  },
  data() {
    return {
      // 默认基础字段
      basicComponents,
    };
  },
  mounted() {

  },
  methods: {
      setClass (icon) {
      return icon
    },
  }
};
</script>


<style lang="scss">
</style>