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
    testSetting() {
      // this.setting.refDisplay.test = !this.setting.refDisplay.test
      this.setting.refDisabled.test = !this.setting.refDisabled.test;
    },
    changeTest() {
      debugger;
    },
    blurTest() {
      debugger;
    },
    fetchSuggestions(queryString, cb) {
      console.log(
        `远程搜索的关键字是：${queryString}`,
        "该组件使用请在setting中添加 fetchSuggestions 方法，否则将会报错！"
      );
      setTimeout(() => {
        // eslint-disable-next-line
        cb([
          { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
          {
            value: "Hot honey 首尔炸鸡（仙霞路）",
            address: "上海市长宁区淞虹路661号",
          },
          {
            value: "新旺角茶餐厅",
            address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
          },
          { value: "泷千家(天山西路店)", address: "天山西路438号" },
          {
            value: "胖仙女纸杯蛋糕（上海凌空店）",
            address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
          },
          { value: "贡茶", address: "上海市长宁区金钟路633号" },
          {
            value: "豪大大香鸡排超级奶爸",
            address: "上海市嘉定区曹安公路曹安路1685号",
          },
          {
            value: "茶芝兰（奶茶，手抓饼）",
            address: "上海市普陀区同普路1435号",
          },
          { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
          { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
          { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
          { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
          {
            value: "Monica摩托主题咖啡店",
            address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
          },
          {
            value: "浮生若茶（凌空soho店）",
            address: "上海长宁区金钟路968号9号楼地下一层",
          },
          {
            value: "NONO JUICE  鲜榨果汁",
            address: "上海市长宁区天山西路119号",
          },
          { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
          {
            value: "快乐柠檬（神州智慧店）",
            address: "上海市长宁区天山西路567号1层R117号店铺",
          },
          {
            value: "Merci Paul cafe",
            address: "上海市普陀区光复西路丹巴路28弄6号楼819",
          },
          {
            value: "猫山王（西郊百联店）",
            address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
          },
          { value: "枪会山", address: "上海市普陀区棕榈路" },
          { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
          { value: "钱记", address: "上海市长宁区天山西路" },
          { value: "壹杯加", address: "上海市长宁区通协路" },
          {
            value: "唦哇嘀咖",
            address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
          },
          { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
          {
            value: "爱茜茜里(近铁广场)",
            address:
              "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
          },
          {
            value: "鲜果榨汁（金沙江路和美广店）",
            address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
          },
          {
            value: "开心丽果（缤谷店）",
            address: "上海市长宁区威宁路天山路341号",
          },
          { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
          { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
          { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
          {
            value: "凡仔汉堡（老真北路店）",
            address: "上海市普陀区老真北路160号",
          },
          { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
          { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
          { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
          {
            value: "饭典*新简餐（凌空SOHO店）",
            address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
          },
          {
            value: "焦耳·川式快餐（金钟路店）",
            address: "上海市金钟路633号地下一层甲部",
          },
          { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
          { value: "浏阳蒸菜", address: "天山西路430号" },
          { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
          {
            value: "樱花食堂（凌空店）",
            address: "上海市长宁区金钟路968号15楼15-105室",
          },
          { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
          {
            value: "福荣祥烧腊（平溪路店）",
            address: "上海市长宁区协和路福泉路255弄57-73号",
          },
          {
            value: "速记黄焖鸡米饭",
            address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
          },
          { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
          {
            value: "(小杨生煎)西郊百联餐厅",
            address: "长宁区仙霞西路88号百联2楼",
          },
          { value: "阳阳麻辣烫", address: "天山西路389号" },
          {
            value: "南拳妈妈龙虾盖浇饭",
            address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
          },
        ]);
      }, 1000);
    },
    filterMethod(value, value2) {
      debugger;
    },
    remoteMethod(value, value2) {
      debugger;
    },
    fn() {
      console.log("disabled弹窗");
    },
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