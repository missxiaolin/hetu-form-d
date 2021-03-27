<template>
  <div>
    <div v-if="data && data.options" class="widgetFromCol">
      <el-row
        v-if="data.type === 'grid'"
        :class="data.className"
        :gutter="data.options.gutter ? data.options.gutter : 0"
        :type="data.options.type"
        :justify="data.options.justify"
        :align="data.options.align"
        :tag="data.options.tag"
        @click.prevent.stop.native="handleSelectWidget()"
      >
        <el-col
          v-for="(item, index) in data.columns"
          :key="index"
          :span="item.span"
        >
          <div>
            <!-- 栅格里面可以拖拽进去 -->
            <vuedraggable
              style="border: 1px dashed #999; min-height: 60px"
              v-model="item.list"
              v-bind="{ group: 'people', ghostClass: 'ghost' }"
              @add="handleWidgetColAdd($event, index)"
            >
              <div v-for="(itm, idx) in item.list" :key="idx">
                <!-- 栅格。调用自身循环 -->
                <template v-if="itm.type === 'grid'">
                  <widget-form-col :element.sync="itm"> </widget-form-col>
                </template>
                <!-- 不是栅格，基础组件 -->
                <template v-else>
                  <widget-form-item
                    v-if="itm.key"
                    :element.sync="itm"
                  ></widget-form-item>
                </template>
              </div>
            </vuedraggable>
          </div>
        </el-col>
      </el-row>
      <!-- 先不做 -->
      <!-- <el-button
      class="widgetFromColDelete"
      type="danger"
      icon="el-icon-delete"
      circle
      @click.native.stop="handleWidgetDelete()">
    </el-button> -->
    </div>
  </div>
</template>

<script>
// 拖拽
import vuedraggable from "vuedraggable";
import { addDraggerWidget } from "../tool/magicGenerate";
import WidgetFormItem from "./WidgetFormItem.vue";
import WidgetFormCol from "./WidgetFormCol.vue";

export default {
  name: "WidgetFormCol",
  components: {
    vuedraggable,
    WidgetFormItem,
    WidgetFormCol,
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      data: this.element,
    };
  },
  watch: {
    element: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
    },
  },
  computed: {},
  created() {},
  updated() {},
  mounted() {},
  methods: {
    // row 点击事件
    handleSelectWidget() {
      this.$store.commit("set_selectWidget", this.data);
    },
    // 拖拽元素进入栅格
    handleWidgetColAdd($event, index) {
      // newIndex: the index of the added element
      let newIndex = $event.newIndex;
      // index：v-for 循环 data.columns 的索引，相当于第几个el-col
      // 一个 columns 是一行，对应一个el-row，this.data.columns[index].list[newIndex] 新拖拽进来的元素
      // returnItem 构建好的item元素
      let returnItem = addDraggerWidget(
        this.data.columns[index].list[newIndex]
      );
      returnItem.options.span = 12;
      // 给返回数据添加双向绑定
      this.$set(this.data.columns[index].list, newIndex, returnItem);
      // 记录当前拖拽进去的item元素
      this.$store.commit("set_selectWidget", returnItem);
    },
    // 删除栅格
    handleWidgetDelete() {},
  },
};
</script>