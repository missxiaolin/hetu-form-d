<template>
  <div class="">
    <!-- v-model -->
    <el-form-item label="绑定值">
      <div>{{ data.options.defaultValue }}</div>
      <el-tag
        style="margin-left: 10px"
        v-for="(item, index) in data.options.defaultValue"
        :key="index"
        >{{ item }}</el-tag
      >
    </el-form-item>
    <el-form-item label="是否是级联面板（isPanel）">
      <el-radio-group v-model="data.options.isPanel">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-button type="primary" size="medium" @click="setProps"
      >设置Props</el-button
    >
    <el-form-item label="尺寸（size）">
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框占位文本（placeholder）">
      <el-input v-model="data.options.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否支持清空选项（clearable）">
      <el-radio-group v-model="data.options.clearable">
        <el-radio :label="true">可清空</el-radio>
        <el-radio :label="false">不可清空</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框中是否显示选中值的完整路径（show-all-levels）">
      <el-radio-group v-model="data.options.showAllLevels">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="多选模式下是否折叠Tag（collapse-tags）">
      <el-radio-group v-model="data.options.showAllLevels">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选项分隔符（separator）">
      <el-input v-model="data.options.separator"></el-input>
    </el-form-item>
    <el-form-item label="是否可搜索选项（filterable）">
      <el-radio-group v-model="data.options.showAllLevels">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="搜索关键词输入的去抖延迟，毫秒（debounce）">
      <el-input-number
        v-model="data.options.debounce"
        :min="0"
        :max="9999999999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="自定义浮层类名（popper-class）">
      <el-input v-model="data.options.popperClass"></el-input>
    </el-form-item>
    <Dialog
      v-model="visible"
      :isForm="true"
      :inline="false"
      :append-to-body="true"
      :showBtns="false"
      title="设置Props"
    >
      <template slot="form">
        <el-form-item label="是否可搜索选项（filterable）">
          <el-radio-group v-model="data.options.props.expandTrigger">
            <el-radio label="click">click</el-radio>
            <el-radio label="hover">hover</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否多选（multiple）">
          <el-radio-group v-model="data.options.props.multiple">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">不是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否严格的遵守父子节点不互相关联（checkStrictly）">
          <el-radio-group v-model="data.options.props.checkStrictly">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">不是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值（emitPath）"
        >
          <el-radio-group v-model="data.options.props.emitPath">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">不是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="是否动态加载子节点，需与 lazyLoad 方法结合使用（lazy）"
        >
          <el-radio-group v-model="data.options.props.lazy">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">不是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="指定选项的值为选项对象的某个属性值（value）">
          <el-input v-model="data.options.props.value"></el-input>
        </el-form-item>
        <el-form-item label="指定选项标签为选项对象的某个属性值（label）">
          <el-input v-model="data.options.props.label"></el-input>
        </el-form-item>
        <el-form-item
          label="指定选项的子选项为选项对象的某个属性值（children）"
        >
          <el-input v-model="data.options.props.children"></el-input>
        </el-form-item>
        <el-form-item label="指定选项的禁用为选项对象的某个属性值（disabled）">
          <el-input v-model="data.options.props.disabled"></el-input>
        </el-form-item>
        <el-form-item
          label="指定选项的叶子节点的标志位为选项对象的某个属性值（leaf）"
        >
          <el-input v-model="data.options.props.leaf"></el-input>
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
      visible: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    setProps() {
      this.visible = true;
    },
  },
};
</script>
<style lang="less" scoped>
</style>
