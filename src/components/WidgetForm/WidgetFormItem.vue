<template>
  <div class="widgetFormItem">
    <!-- title -->
    <div v-if="data && data.type === 'text'">text</div>
    <!-- table -->
    <div v-if="data && data.type === 'table'">table</div>
    <!-- 组件判断 -->
    <div v-else>
      <el-form-item
        v-if="data && data.key"
        :class="data.attr.className"
        prop="data.attr.prop"
        :label="data.attr.label"
        :label-width="data.attr.labelWidth + 'px'"
        :required="data.attr.required"
        @click.native.stop="handleSelectWidget"
      >
        <!-- 输入框：input -->
        <input-item v-if="data.type === 'input'" :data="data"></input-item>
      </el-form-item>
    </div>
  </div>
</template>

<script>
import InputItem from './WidgetItem/InputItem'

export default {
  name: "WidgetFormItem",
  components: {
    InputItem
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
    // 监听数据，赋值给data，否则拖拽过来数据不会重新添加和渲染
    element: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectWidget() {
      this.$store.commit('set_selectWidget', this.data)
    }
  },
};
</script>