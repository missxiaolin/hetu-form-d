<template>
  <Dialog
    class="delete-attr-dialog"
    v-model="visible"
    title="删除属性"
    :showBtns="true"
    cancelText="取消"
    :cancelFunc="cancelFunc"
    confirmText="确定"
    :confirmFunc="confirmFunc"
    :isForm="true"
    :formModel="dialogModel.form"
    :formRules="dialogModel.rules"
    :append-to-body="true"
    :close-on-click-modal="false"
  >
    <!-- 我是form -->
    <template slot="form">
      <el-alert
        title="undefined 属性 在右边 JSON 中不会显示，最终结果以右边 JSON 为准"
        type="success"
        :closable="false"
        style="margin-bottom: 13px"
      >
      </el-alert>
      <el-row>
        <el-col :span="12">
          <div ref="_attrlist">
            <el-form-item
              v-for="item in list"
              :label="item.key"
              :key="item.key"
            >
              <el-radio-group
                v-model="item.value"
                @change="radioChange(item.key, item.value)"
              >
                <el-radio :label="true">属性存在</el-radio>
                <el-radio :label="false">删除属性</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <!--代码输入框（注意请务必设置高度，否则无法显示）-->
          <div
            id="jsoneditordialog"
            v-if="jsonShow"
            ref="_jsoneditor"
            :style="{ height: 50 * list.length + 'px' }"
          >
            {{ jsoneditor }}
          </div>
        </el-col>
      </el-row>
    </template>
  </Dialog>
</template>

<script>
import Dialog from './Dialog'

export default {
  name: "DeleteAttr",
  components: {
      Dialog
  },
  props: {},
  data() {
    return {
      attr: {},
      visible: false,
      dialogModel: {},
      // 构建的key-value数据
      list: [],
      // json字段
      jsoneditor: "",
      // json div显示状态
      jsonShow: false,
      key: "",
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    show(attr, key) {
      this.visible = true;
      this.attr = attr;
      this.resetData();
      this.key = key;
      this.$nextTick(() => {
        this.formatData();
        this.showJson();
      });
    },
    resetData() {
      // 每次进来的时候，jsondeitor都要求重新渲染
      this.jsonShow = false;
      this.jsoneditor = "";
      this.list = [];
      this.dialogModel = {};
      this.key = "";
    },
    // 格式化显示数据
    formatData() {
      for (const key in this.attr) {
        if (this.attr.hasOwnProperty(key)) {
          this.list.push({
            key: key,
            value: true,
          });
        }
      }
    },
    showJson() {
      this.jsonShow = true;
      try {
        this.jsoneditor = JSON.parse(JSON.stringify(this.attr));
      } catch (error) {
        this.jsoneditor = this.attr;
      }
      // 构建数据
      this.$nextTick(() => {
        this.setAce();
      });
    },
    setAce() {
      // eslint-disable-next-line
      let editor = ace.edit("jsoneditordialog");
      editor.$blockScrolling = Infinity;
      editor.setFontSize(16);
      editor.session.setMode("ace/mode/json");
      editor.setOption("wrap", "free");
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      });
      // editor.setReadOnly(true)
      editor.getSession().on("change", function (e) {
        // 内容变化触发方法
      });
      editor.setTheme("ace/theme/monokai");
    },
    radioChange(key, value) {
      this.jsonShow = false;
      if (value) {
        this.jsoneditor[key] = this.attr[key];
      } else {
        delete this.jsoneditor[key];
      }
      this.$nextTick(() => {
        this.jsonShow = true;
        this.$nextTick(() => {
          this.setAce();
        });
      });
      // 直接设置 setValue() 会显示一行
      // this.editor.session.setValue(JSON.stringify(this.jsoneditor))
    },
    cancelFunc() {},
    confirmFunc() {
      let ret = {};
      try {
        // eslint-disable-next-line
        let json = ace.edit("jsoneditordialog").getValue();
        ret = JSON.parse(json);
      } catch (error) {
        ret = this.jsoneditor;
      }
      this.$emit("deleteAttrFnCb", ret, this.key);
    },
  },
};
</script>
<style lang="scss">
.delete-attr-dialog {
  .el-dialog__body {
    padding-top: 5px;
  }
  .el-alert__title {
    font-size: 14px;
    font-weight: 700;
  }
  .content {
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
}
</style>
