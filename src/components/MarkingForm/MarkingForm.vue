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
            <div class="title">布局字段</div>
            <vuedraggable
              tag="ul"
              :list="layoutComponents"
              :group="{ name: 'people', pull: 'clone', put: false }"
              :sort="false"
              :ghostClass="'ghost'"
            >
              <li
                class="form-edit-label"
                v-for="(item, index) in layoutComponents"
                :key="index"
              >
                <a
                  :style="{ backgroundColor: item.backgroundColor }"
                  href="javascript:;"
                >
                  <i :class="setClass(item.icon)"></i>
                  {{ item.label }}</a
                >
              </li>
            </vuedraggable>
          </div>
        </el-aside>
        <!-- 动态表单模板 -->
        <el-container class="center-container" direction="vertical">
          <div class="btn-bar" style="height: 45px">
            <span style="margin: 0 20px">
              <el-link href="#" target="_blank">小林博客</el-link>
            </span>
            <span style="margin: 0 20px">
              <el-link href="#" target="_blank">点击获取源码</el-link>
            </span>
            <!-- <el-button type="info" size="medium">还原</el-button> -->
            <!-- <el-button type="info" size="medium" @click="readme">功能介绍</el-button> -->
            <el-button type="primary" size="medium" @click="getJSON"
              >复制JSON</el-button
            >
            <el-button type="primary" size="medium" @click="previewShow"
              >预览</el-button
            >
            <el-button type="primary" size="medium" @click="testSetting"
              >test</el-button
            >
          </div>
          <el-main
            :class="{
              'widget-empty': widgetForm.list && widgetForm.list.length == 0,
            }"
          >
            <widget-form-component ref="widgetForm" :data="widgetForm">
            </widget-form-component>
          </el-main>
        </el-container>
        <!-- 表单属性设置 -->
        <el-aside class="markform-right">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            :stretch="true"
          >
            <el-tab-pane label="字段属性" name="widget">
              <widget-config :data="widgetFormSelect"></widget-config>
            </el-tab-pane>
            <el-tab-pane label="表单属性" name="form">
              <widget-config-right
                :data="widgetForm.config"
              ></widget-config-right>
            </el-tab-pane>
          </el-tabs>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
// 拖拽
import vuedraggable from "vuedraggable";
// 左边-配置
import { basicComponents, layoutComponents } from "../tool/ConponentsConfig";
import { defaultPageJson } from "../tool/formConfig";

// 中间-主体部分
import WidgetFormComponent from "../WidgetForm/WidgetForm.vue";

// 右边属性
import WidgetConfig from './MarkingWidgetConfig.vue'
import WidgetConfigRight from './MarkingWidgetConfigRight.vue'
import Readme from '../Dialog/Readme'

export default {
  name: "MarkingForm",
  components: {
    vuedraggable,
    WidgetFormComponent,
    WidgetConfig,
    WidgetConfigRight,
    Readme
  },
  data() {
    return {
      // 属性控制tab切换：first和second
      activeName: "widget",
      // 中间选中组件，右边战术他们的字段属性
      widgetFormSelect: null,
      // 默认基础字段
      basicComponents,
      // 布局
      layoutComponents,
      widgetForm: defaultPageJson,
    };
  },
  mounted() {},
  methods: {
    setClass(icon) {
      return icon;
    },
    getJSON() {},
    previewShow() {},
    testSetting() {},
    handleClick() {

    }
  },
};
</script>


<style lang="scss">
</style>