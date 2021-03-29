<template>
  <div>
    <el-form-item label="输入框占位文本（placeholder）">
      <el-input v-model="data.options.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入建议对象中用于显示的键名（value-key）">
      <el-input v-model="data.options.valueKey"></el-input>
    </el-form-item>
    <el-form-item label="必填值，输入绑定值（value）" required>
      <el-input v-model="data.options.value"></el-input>
    </el-form-item>
    <el-form-item label="获取输入建议的去抖延时（debounce）">
      <el-input-number v-model="data.options.debounce"></el-input-number>
    </el-form-item>
    <el-form-item label="菜单弹出位置（placement）">
      <el-radio-group v-model="data.options.placement">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="top-start">top-start</el-radio-button>
        <el-radio-button label="top-end">top-end</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="bottom-start">bottom-start</el-radio-button>
        <el-radio-button label="bottom-end">bottom-end</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Autocomplete 下拉列表的类名（popper-class）" required>
      <el-input v-model="data.options.popperClass"></el-input>
    </el-form-item>
    <el-form-item label="是否在输入框 focus 时显示建议列表（trigger-on-focus）">
      <el-radio-group v-model="data.options.triggerOnFocus">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性（name）">
      <el-input v-model="data.options.name"></el-input>
    </el-form-item>
    <el-form-item
      label="在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件（select-when-unmatched）"
    >
      <el-radio-group v-model="data.options.selectWhenUnmatched">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框关联的label文字（label）">
      <el-input v-model="data.options.label"></el-input>
    </el-form-item>
    <el-form-item label="输入框头部图标（prefix-icon）">
      <el-input v-model="data.options.prefixIcon"></el-input>
    </el-form-item>
    <el-form-item label="输入框尾部图标（suffix-icon）">
      <el-input v-model="data.options.suffixIcon"></el-input>
    </el-form-item>
    <el-form-item label="在是否隐藏远程加载时的加载图标（hide-loading）">
      <el-radio-group v-model="data.options.hideLoading">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false（popper-append-to-body）"
    >
      <el-radio-group v-model="data.options.popperAppendToBody">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="是否默认突出显示远程搜索建议中的第一项（highlight-first-item）"
    >
      <el-radio-group v-model="data.options.highlightFirstTtem">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "AutocompleteItem",
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
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
