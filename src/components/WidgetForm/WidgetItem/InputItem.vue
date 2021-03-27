<template>
  <div>
    <el-form-item label="绑定值（v-model）">
      <el-input v-model="data.options.defaultValue"></el-input>
    </el-form-item>
    <el-form-item label="类型（type）">
      <el-radio-group v-model="data.options.type">
        <el-radio-button label="text">text</el-radio-button>
        <el-radio-button label="textarea">textarea</el-radio-button>
        <el-radio-button label="number">number</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性，最大输入长度（maxlength）">
      <el-input-number
        v-model="data.options.maxlength"
        :min="0"
        :max="9999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="原生属性，最小输入长度（minlength）">
      <el-input-number
        v-model="data.options.minlength"
        :min="0"
        :max="9999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="是否显示输入字数统计（show-word-limit）">
      <el-alert
        title="text、textare可用，必须设置maxLength才有效"
        type="success"
      ></el-alert>
      <el-radio-group v-model="data.options.showWordLimit">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框占位文本（placeholder）">
      <el-input v-model="data.options.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="是否可清空（clearable）">
      <el-radio-group v-model="data.options.clearable">
        <el-radio :label="true">可清空</el-radio>
        <el-radio :label="false">不可清空</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否显示切换密码图标（show-password）">
      <el-radio-group v-model="data.options.showPassword">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框尺寸，只在 type!='textarea' 时有效（size）">
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框头部图标（prefix-icon）">
      <el-input v-model="data.options.prefixIcon"></el-input>
    </el-form-item>
    <el-form-item label="输入框尾部图标（suffix-icon）">
      <el-input v-model="data.options.suffixIcon"></el-input>
    </el-form-item>
    <el-form-item label="输入框行数，只对 type='textarea' 有效（rows）">
      <el-input-number
        v-model="data.options.rows"
        :min="0"
        :max="9999"
        :step="1"
        :step-strictly="true"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="自适应内容高度，只对 type=textarea' 有效（autosize）">
      <el-radio-group v-model="autoSize">
        <el-radio :label="true">false</el-radio>
        <el-radio :label="false">自定义</el-radio>
      </el-radio-group>
      <el-input
        v-if="!autoSize"
        v-model="autoSizeModel"
        type="textarea"
        @change="autoSizeChange"
      ></el-input>
    </el-form-item>
    <el-form-item label="原生属性，自动补全（autocomplete）">
      <el-radio-group v-model="data.options.autocomplete">
        <el-radio label="on">补全</el-radio>
        <el-radio label="off">不补全</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性（name）">
      <el-input v-model="data.options.name"></el-input>
    </el-form-item>
    <el-form-item label="原生属性，是否只读（readonly）">
      <el-radio-group v-model="data.options.readonly">
        <el-radio :label="true">只读</el-radio>
        <el-radio :label="false">不只读</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性，设置最大值（max）">
      <el-input-number v-model="data.options.max"></el-input-number>
    </el-form-item>
    <el-form-item label="原生属性，设置最小值（min）">
      <el-input-number v-model="data.options.min"></el-input-number>
    </el-form-item>
    <el-form-item label="原生属性，设置输入字段的合法数字间隔（step）">
      <el-input-number v-model="data.options.step"></el-input-number>
    </el-form-item>
    <el-form-item label="控制是否能被用户缩放（resize）-textarea">
      <el-radio-group v-model="data.options.resize">
        <el-radio-button label="none">none</el-radio-button>
        <el-radio-button label="both">both</el-radio-button>
        <el-radio-button label="horizontal">horizontal</el-radio-button>
        <el-radio-button label="vertical">vertical</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="原生属性，自动获取焦点（autofocus）">
      <el-radio-group v-model="data.options.autofocus">
        <el-radio :label="true">自动获取焦点</el-radio>
        <el-radio :label="false">不自动获取焦点</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="原生属性， 属性规定 input 元素所属的一个或多个表单（form）,后跟表单id属性"
    >
      <el-input v-model="data.options.form"></el-input>
    </el-form-item>
    <el-form-item label="输入框关联的label文字（label）">
      <el-input v-model="data.options.label"></el-input>
    </el-form-item>
    <el-form-item label="输入框的tabindex（tabindex）">
      <el-input v-model="data.options.tabindex"></el-input>
    </el-form-item>
    <el-form-item label="输入时是否触发表单的校验（validate-event）">
      <el-radio-group v-model="data.options.validateEvent">
        <el-radio :label="true">触发</el-radio>
        <el-radio :label="false">不触发</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: "InpurItem",
  components: {},
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
      autoSize: true,
      autoSizeModel: "{}",
      autoSizeObj: {},
    };
  },
  watch: {
    autoSize(value) {
      if (value === true) {
        this.data.options.autosize = false;
      } else {
        try {
          this.autoSizeObj = JSON.parse(this.autoSizeModel) || {};
        } catch (error) {
          this.autoSizeObj = {};
        }
        this.data.options.autosize = this.autoSizeObj;
      }
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    autoSizeChange(value) {
      let autosize = {};
      try {
        autosize = JSON.parse(value) || {};
      } catch (error) {
        autosize = {};
      }
      this.data.options.autosize = autosize;
    },
  },
};
</script>
<style lang="less">
</style>
