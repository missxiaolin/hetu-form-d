<template>
  <div class="">
    <el-row
      v-if="data.type === 'grid'"
      :class="data.className"
      :gutter="data.options.gutter ? data.options.gutter : 0"
      :type="data.options.type"
      :justify="data.options.justify"
      :align="data.options.align"
      :tag="data.options.tag"
    >
      <el-col
        v-for="(item, index) in data.columns"
        :key="index"
        :span="item.span"
        style="border: 1px dashed #999; min-height: 60px"
      >
        <!-- 循环组件渲染：columns下属list -->
        <div v-for="(colItem, colIndex) in item.list" :key="colIndex">
          <template v-if="colItem.type === 'grid'">
            <!-- 循环自身 -->
            <generate-form-col :data="colItem"></generate-form-col>
          </template>
          <template v-else>
            <generate-form-item :data="colItem"></generate-form-item>
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 自身
import GenerateFormCol from "./GenerateFormCol.vue";
// item-普通组件
import GenerateFormItem from "./GenerateFormItem.vue";

export default {
  name: "GenerateFormCol",
  components: {
    GenerateFormCol,
    GenerateFormItem,
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
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>