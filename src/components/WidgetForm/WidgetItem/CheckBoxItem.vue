<template>
  <div class="">
    <el-form-item label="绑定值">
      <div>{{ data.options.defaultValue }}</div>
      <el-tag
        style="margin-left: 10px"
        v-for="(item, index) in data.options.defaultValue"
        :key="index"
        >{{ item }}</el-tag
      >
    </el-form-item>
    <el-form-item label="">
      <div style="margin-bottom: 20px">
        <el-button type="primary" @click="addCheckBoxItem"
          >添加一个checkbox</el-button
        >
      </div>
      <div>
        <el-button
          style="margin-right: 20px"
          @click="deleteCheckBoxItem"
          type="primary"
          >删除第几个</el-button
        >
        <el-input-number
          v-model="deleteIndex"
          :min="1"
          :max="data.options.boxList.length"
          :step="1"
          :step-strictly="true"
        ></el-input-number>
      </div>
      <div style="margin-top: 20px">
        <el-button
          style="margin-right: 20px"
          @click="editCheckBoxItem"
          type="primary"
          >编辑第几个</el-button
        >
        <el-input-number
          v-model="editIndex"
          :min="1"
          :max="data.options.boxList.length"
          :step="1"
          :step-strictly="true"
        ></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="按钮样式-Button（isButton）">
      <el-radio-group v-model="data.options.isButton">
        <el-radio :label="false">不是Button</el-radio>
        <el-radio :label="true">按钮Button</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效（size）"
    >
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="可被勾选的 checkbox 的最小数量（min）">
      <el-input-number
        v-model="data.options.min"
        :min="0"
        :max="999999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="可被勾选的 checkbox 的最大数量（max）">
      <el-input-number
        v-model="data.options.max"
        :min="0"
        :max="999999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      label="按钮形式（Button）的 Checkbox 激活时的文本颜色（text-color）"
    >
      <el-color-picker v-model="data.options.textColor"></el-color-picker>
    </el-form-item>
    <el-form-item
      label="按钮形式（Button）的 Checkbox 激活时的填充色和边框色（fill）"
    >
      <el-color-picker v-model="data.options.fill"></el-color-picker>
    </el-form-item>
    <Dialog
      title="单个checkBox属性设置"
      :isForm="true"
      v-model="visible"
      :inline="false"
      :append-to-body="true"
      :showBtns="false"
    >
      <template slot="form">
        <el-form-item label="checkBox 的 value">
          <el-input v-model="selectItem.label"></el-input>
        </el-form-item>
        <el-form-item label="checkBox 的 text">
          <el-input v-model="selectItem.text"></el-input>
        </el-form-item>
        <!-- true-label-->
        <el-form-item label="选中时的值（true-label）">
          <el-input v-model="selectItem.trueLabel"></el-input>
        </el-form-item>
        <!-- false-label  -->
        <el-form-item label="没有选中时的值（false-label）">
          <el-input v-model="selectItem.falseLabel"></el-input>
        </el-form-item>
        <el-form-item label="是否禁用（disabled）">
          <el-radio-group v-model="selectItem.disabled">
            <el-radio :label="true">禁用</el-radio>
            <el-radio :label="false">不禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否显示边框（border）">
          <el-radio-group v-model="selectItem.border">
            <el-radio :label="true">显示</el-radio>
            <el-radio :label="false">不显示</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="checkBox 的尺寸，仅在 border 为真时有效（size）">
          <el-radio-group v-model="selectItem.size">
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="原生 name 属性（name）">
          <el-input v-model="selectItem.name"></el-input>
        </el-form-item>
        <el-form-item label="当前是否勾选（checked）">
          <el-radio-group v-model="selectItem.checked">
            <el-radio :label="true">勾选</el-radio>
            <el-radio :label="false">不勾选</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="设置 indeterminate 状态，只负责样式控制（indeterminate）"
        >
          <el-radio-group v-model="selectItem.indeterminate">
            <el-radio :label="true">true</el-radio>
            <el-radio :label="false">false</el-radio>
          </el-radio-group>
        </el-form-item>
      </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mixins: [],
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
      deleteIndex: 1,
      editIndex: 1,
      selectItem: {},
      visible: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    addCheckBoxItem() {
      let len = this.data.options.boxList.length + 1;
      this.data.options.boxList.push({
        label: "label" + len,
        text: "text" + len,
        trueLabel: undefined,
        falseLabel: undefined,
        disabled: false,
        border: false,
        size: undefined,
        name: undefined,
        checked: false,
        indeterminate: false,
      });
    },
    deleteCheckBoxItem() {
      let list = this.data.options.boxList;
      if (Number(this.deleteIndex) <= Number(list.length)) {
        list = list.splice(this.deleteIndex - 1, 1);
        this.deleteIndex -= 1;
      } else {
        this.$message.error("请正确输入删除第几个checkbox");
      }
    },
    editCheckBoxItem() {
      let len = this.data.options.boxList.length;
      if (this.editIndex <= len) {
        this.visible = true;
        this.selectItem = this.data.options.boxList[this.editIndex - 1];
      } else {
        this.$message.error("选择的单选框下标索引不正确，请重新选择");
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>
