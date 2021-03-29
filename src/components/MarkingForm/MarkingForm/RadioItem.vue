<template>
  <div class="">
    <el-form-item label="绑定值（v-model）">
      <el-input v-model="data.options.defaultValue"></el-input>
    </el-form-item>
    <el-form-item label="">
      <div style="margin-bottom: 20px">
        <el-button @click="addRadioItem" type="primary"
          >添加一个radio选项</el-button
        >
      </div>
      <div>
        <el-button
          style="margin-right: 20px"
          @click="deleteRadioItem"
          type="primary"
          >删除第几个</el-button
        >
        <el-input-number
          v-model="deleteIndex"
          :min="1"
          :max="data.options.radioList.length"
          :step="1"
          :step-strictly="true"
        ></el-input-number>
      </div>
      <div style="margin-top: 20px">
        <el-button
          style="margin-right: 20px"
          @click="editRadioItem"
          type="primary"
          >编辑第几个</el-button
        >
        <el-input-number
          v-model="editIndex"
          :min="1"
          :max="data.options.radioList.length"
          :step="1"
          :step-strictly="true"
        ></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="按钮样式-Button（isButton）">
      <el-radio-group v-model="data.options.isButton">
        <el-radio :label="false">圆圈</el-radio>
        <el-radio :label="true">按钮Button</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效（size）"
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
    <el-form-item
      label="按钮形式（Button）的 Radio 激活时的文本颜色（text-color）"
    >
      <el-color-picker v-model="data.options.textColor"></el-color-picker>
    </el-form-item>
    <el-form-item
      label="按钮形式的（Button）的 Radio 激活时的填充色和边框色（fill）"
    >
      <el-color-picker v-model="data.options.fill"></el-color-picker>
    </el-form-item>
    <Dialog
      title="单个radio属性设置"
      :isForm="true"
      v-model="visible"
      :inline="false"
      :append-to-body="true"
      :showBtns="false"
    >
      <template slot="form">
        <el-form-item label="Radio 的 value">
          <el-input v-model="selectItem.label"></el-input>
        </el-form-item>
        <el-form-item label="Radio 的 text">
          <el-input v-model="selectItem.text"></el-input>
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
        <el-form-item label="Radio 的尺寸，仅在 border 为真时有效（size）">
          <el-radio-group v-model="selectItem.size">
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="原生 name 属性（name）">
          <el-input v-model="selectItem.name"></el-input>
        </el-form-item>
      </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "RadioItem",
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
    addRadioItem() {
      let len = this.data.options.radioList.length + 1;
      this.data.options.radioList.push({
        label: "label" + len,
        text: "text" + len, // text优先级高于label，label后面显示的内容
        border: false,
        size: "",
        name: "",
      });
    },
    deleteRadioItem() {
      let list = this.data.options.radioList;
      if (Number(this.deleteIndex) <= Number(list.length)) {
        list = list.splice(this.deleteIndex - 1, 1);
        this.deleteIndex -= 1;
      } else {
        this.$message.error("请正确输入删除第几个radio");
      }
    },
    editRadioItem() {
      let len = this.data.options.radioList.length;
      if (this.editIndex <= len) {
        this.visible = true;
        this.selectItem = this.data.options.radioList[this.editIndex - 1];
      } else {
        this.$message.error("选择的单选框下标索引不正确，请重新选择");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
