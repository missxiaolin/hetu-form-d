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
        <template v-if="data.type === 'grid'">
          <el-collapse-item :name="data.type" v-if="data.type === 'grid'">
            <template slot="title">
              <span>栅格属性</span>
            </template>
            <!-- 栅格 -->
            <div style="height: 76vh; overflow: auto">
              <!-- 栅格el-row属性 -->
              <el-form-item label="栅格间隔（gird）">
                <el-input-number
                  v-model="data.options.gutter"
                ></el-input-number>
              </el-form-item>
              <!-- 栅格占据的列数-el-col属性 -->
              <!-- 这个是子元素，需要添加循环 -->
              <div>
                <el-form-item
                  label="栅格占据的列数（span）"
                  v-for="(item, index) in data.columns"
                  :key="index"
                >
                  <el-input-number
                    v-model="item.span"
                    :step="1"
                    :min="0"
                    :max="24"
                    :step-strictly="true"
                  >
                  </el-input-number>
                  <!-- 删除按钮 -->
                  <el-button
                    @click="deleteCol(item, index)"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                </el-form-item>
                <el-button type="primary" @click="addCol">添加一列</el-button>
              </div>
              <!-- 是否删除栅格 -->
              <el-form-item>
                <el-button type="primary" @click="deleteRow"
                  >删除整个栅格</el-button
                >
              </el-form-item>
            </div>
          </el-collapse-item>
        </template>
        <el-collapse-item name="1">
          <template slot="title">
            <span>Form-Item Attributes (表单组件通用属性)</span>
          </template>
          <div>
            <el-button type="primary" @click="deleteAttrFn('attr')"
              >删除属性</el-button
            >
          </div>
          <!-- 公共选修 -->
          <BaseItem v-if="data.attr" :data="data.attr"></BaseItem>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <span>options（组件属性）</span>
          </template>
          <div style="height: 76vh; overflow: auto">
            <div>
              <el-button type="primary" @click="deleteAttrFn('options')"
                >删除属性</el-button
              >
            </div>
            <!-- input -->
            <input-item v-if="data.type === 'input'" :data="data"></input-item>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <!-- 删除属性 -->
    <delete-attr
      ref="_DeleteAttr"
      @deleteAttrFnCb="deleteAttrFnCb"
    ></delete-attr>
    <!-- 是否删除栅格 -->
    <el-dialog title="提示" :visible.sync="deleteColVisible" width="30%">
      <span
        >栅格中存在
        {{ deleteItem.list.length || 0 }} 个自定义元素，是否删除？</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteColVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteColConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { deepClone } from "../tool/tool";
import DeleteAttr from "../Dialog/DeleteAttr";
import BaseItem from "./MarkingForm/BaseItem.vue";
import InputItem from "./MarkingForm/InputItem.vue";

export default {
  name: "MarkingWidgetConfig",
  components: {
    BaseItem,
    InputItem,
    DeleteAttr,
  },
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
      console.log(this.data);
      if (this.data && Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.dataCopy = deepClone(this.data);
  },
  methods: {
    // 是否包含 key 属性
    hasKeyInOptions(key) {
      let keys = Object.keys(this.data.options || {});
      return keys.indexOf(key) >= 0;
    },
    addCol() {
      this.data.columns.push({
        span: 12,
        list: [],
      });
    },
    // 删除某一个item
    deleteCol(item, index) {
      this.deleteItem = item;
      this.deleteIndex = index;
      if (item.list.length > 0) {
        this.deleteColVisible = true;
        // 栅格中存在元素，请确认删除
      } else {
        // 手动删除
        this.data.columns.splice(index, 1);
      }
    },
    // 删除el-col确认
    deleteColConfirm() {
      // 删除元素
      // 手动删除
      this.data.columns.splice(this.deleteIndex, 1);
    },
    // 删除栅格
    deleteRow() {
      this.$message("功能开发中，敬请期待");
    },
    deleteAttrFn(key) {
      this.deleteAttr = this.data[key];
      this.$refs._DeleteAttr.show(this.deleteAttr, key);
    },
    deleteAttrFnCb(value, key) {
      this.data[key] = value;
    },
  },
};
</script>