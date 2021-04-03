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
            <el-button type="info" size="medium" @click="readme"
              >功能介绍</el-button
            >
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
    <!-- JSON dialog -->
    <el-dialog
      title="生成JSON"
      :visible.sync="getJSONShow"
      :destroy-on-close="true"
      center
    >
      <div id="jsoneditor" style="height: 400px; width: 100%">
        {{ jsonTemplate }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="json-btn"
          v-clipboard:copy="jsonCopyValue"
          v-clipboard:success="onCopy"
          type="primary"
          >复制JSON</el-button
        >
      </span>
    </el-dialog>
    <!-- 弹出框预览 -->
    <custom-dialog
      :widgetForm="widgetForm"
      v-if="customDialogStatus"
      ref="_CustomDialog"
    ></custom-dialog>
    <!-- 介绍 -->
    <readme ref="_Readme" v-if="readmeStatus"></readme>
  </el-container>
</template>

<script>
// 拖拽
import vuedraggable from "vuedraggable";
import { mapGetters } from "vuex";

// 弹窗提示复制json
import CustomDialog from "../Dialog/CustomDialog";
// 左边-配置
import { basicComponents, layoutComponents } from "../tool/ConponentsConfig";
import { defaultPageJson } from "../tool/formConfig";

// 中间-主体部分
import WidgetFormComponent from "../WidgetForm/WidgetForm.vue";

// 右边属性
import WidgetConfig from "./MarkingWidgetConfig.vue";
import WidgetConfigRight from "./MarkingWidgetConfigRight.vue";
import Readme from "../Dialog/Readme";

export default {
  name: "MarkingForm",
  // 调用者提供setting
  provide: function () {
    return {
      setting: this.setting,
    };
  },
  components: {
    vuedraggable,
    WidgetFormComponent,
    WidgetConfig,
    WidgetConfigRight,
    Readme,
    CustomDialog,
  },
  data() {
    return {
      // 弹窗显示JSON数据
      getJSONShow: false,
      // 需要显示的JSON数据
      jsonTemplate: "",
      // 复制
      jsonClipboard: null,
      // 复制给用户的数据
      jsonCopyValue: "",
      // 属性控制tab切换：first和second
      activeName: "widget",
      // 中间选中组件，右边战术他们的字段属性
      widgetFormSelect: null,
      // 默认基础字段
      basicComponents,
      // 布局
      layoutComponents,
      widgetForm: defaultPageJson,
      // 预览
      customDialogStatus: false,
      setting: {
        // 设置
        events: {
          test: {
            change: this.changeTest,
            blur: this.blurTest,
          },
          test1: {
            "fetch-suggestions": this.fetchSuggestions,
            "filter-method": this.filterMethod,
            "remote-method": this.remoteMethod,
          },
        },
        // 是否显示
        refDisplay: {
          test: false,
        },
        // 不允许编辑
        refDisabled: {
          test: true,
        },
        // 不允许编辑-添加点击事件
        refDisabledFunc: {
          test: this.fn,
        },
        // 数据源对应数组的，都添加在这里
        // value：对应key
        // label：对应显示的数据
        optList: {
          // 单个下啦
          test: [
            {
              userId: 123001,
              userName: "1111111111",
            },
            {
              userId: 123002,
              userName: "222222222",
            },
            {
              userId: 123003,
              userName: "333333333",
            },
          ],
          // 分组下啦
          test1: [
            {
              label1: "分组1",
              options: [
                {
                  value1: 200101,
                  label1: "44444",
                },
                {
                  value1: 200102,
                  label1: "55555",
                },
              ],
            },
            {
              label1: "分组2",
              options: [
                {
                  value1: 20010101,
                  label1: "66666",
                },
                {
                  value1: 20010102,
                  label1: "77777",
                },
                {
                  value1: 20010103,
                  label1: "888888",
                },
                {
                  value1: 20010104,
                  label1: "999999",
                },
              ],
            },
          ],
        },
        // 数组数据不规范的，全都在这里添加映射
        // label：显示的label
        // value：对应的key
        optMap: {
          test: {
            value: "userId",
            label: "userName",
          },
          test1: {
            value: "value1",
            label: "label1",
          },
        },
      },
      // 功能介绍
      readmeStatus: false,
    };
  },
  watch: {
    // 中间选中的组件数据，传递给下一个组件
    selectWidget: {
      handler(val) {
        this.widgetFormSelect = val;
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["selectWidget"]),
  },
  mounted() {},
  methods: {
    setClass(icon) {
      return icon;
    },
    getJSON() {},
    previewShow() {},
    testSetting() {},
    handleClick() {},
    onCopy(e) {
      this.$message.success("JSON赋值成功");
    },
    // 功能介绍
    readme() {
      this.readmeStatus = true;
      this.$nextTick(() => {
        this.$refs._Readme.show();
      });
    },
  },
};
</script>


<style lang="scss">
</style>