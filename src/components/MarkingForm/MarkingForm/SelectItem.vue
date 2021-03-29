<template>
  <div class="">
    <el-form-item label="绑定值（v-model）">
      <!-- 多选数组 -->
      <template v-if="isArray(data.options.defaultValue)">
        {{ data.options.defaultValue }}
      </template>
      <!-- 单选字符串 -->
      <template v-else>
        <el-input v-model="data.options.defaultValue"></el-input>
      </template>
    </el-form-item>
    <el-form-item label="是否是下拉分组（isGroup）">
      <el-alert title="默认不分组" type="success"></el-alert>
      <el-radio-group v-model="data.options.isGroup">
        <el-radio :label="true">分组</el-radio>
        <el-radio :label="false">不分组</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否多选（multiple）">
      <el-radio-group v-model="data.options.multiple" @change="multipleChange">
        <el-radio :label="false">单选（默认）</el-radio>
        <el-radio :label="true">多选</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="作为 value 唯一标识的键名，绑定值为对象类型时必填（value-key）"
    >
      <el-input v-model="data.options.valueKey"></el-input>
    </el-form-item>
    <el-form-item label="输入框尺寸（size）">
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否可以清空选项（clearable）">
      <el-radio-group v-model="data.options.clearable">
        <el-radio :label="true">可清空</el-radio>
        <el-radio :label="false">不可清空</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="多选时是否将选中值按文字的形式展示（collapse-tags）">
      <el-radio-group v-model="data.options.collapseTags">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="多选时用户最多可以选择的项目数，为 0 则不限制（multiple-limit）"
    >
      <el-input-number
        v-model="data.options.multipleLimit"
        :min="0"
        :max="9999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="原生属性（name）">
      <el-input v-model="data.options.name"></el-input>
    </el-form-item>
    <el-form-item label="select input 的 autocomplete 属性（autocomplete）">
      <el-radio-group v-model="data.options.autocomplete">
        <el-radio label="on">补全</el-radio>
        <el-radio label="off">不补全</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="占位符（placeholder）">
      <el-input v-model="data.options.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="是否可搜索（filterable）">
      <el-radio-group v-model="data.options.filterable">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="是否允许用户创建新条目，需配合 filterable 使用（allow-create）"
    >
      <el-radio-group v-model="data.options.allowCreate">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否为远程搜索（remote）">
      <el-radio-group v-model="data.options.remote">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否正在从远程获取数据（loading）">
      <el-alert
        title="loading为true，会显示正在加载数据，记得请求成功后置为false哦"
        type="success"
      ></el-alert>
      <el-radio-group v-model="data.options.loading">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="远程加载时显示的文字（loading-text）">
      <el-input v-model="data.options.loadingText"></el-input>
    </el-form-item>
    <el-form-item
      label="选项为空时显示的文字，也可以使用slot='empty'设置（no-match-text）"
    >
      <el-input v-model="data.options.noMatchText"></el-input>
    </el-form-item>
    <el-form-item
      label="选项为空时显示的文字，也可以使用slot='empty'设置（no-data-text）"
    >
      <el-input v-model="data.options.noDataText"></el-input>
    </el-form-item>
    <el-form-item label="Select下拉框的类名（popper-class）">
      <el-input v-model="data.options.popperClass"></el-input>
    </el-form-item>
    <el-form-item
      label="多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词（reserve-keyword）"
    >
      <el-radio-group v-model="data.options.reserveKeyword">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用（default-first-option）"
    >
      <el-radio-group v-model="data.options.defaultFirstOption">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false（popper-append-to-body）"
    >
      <el-radio-group v-model="data.options.popperAppendToBody">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单（automatic-dropdown）"
    >
      <el-radio-group v-model="data.options.automaticDropdown">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">不是</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
import { isArray } from "../../tool/types";
export default {
  name: "SelectItem",
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
  methods: {
    isArray,
    multipleChange(value) {
      if (value) {
        this.data.options.defaultValue = [];
      } else {
        this.data.options.defaultValue = "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
