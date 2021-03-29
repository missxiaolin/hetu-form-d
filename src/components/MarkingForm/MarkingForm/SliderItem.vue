<template>
  <div class="slide-item">
    <el-alert
      style="margin-top: 10px"
      title="Slider 需要设置 form 非行内才有效果，正在寻找解决方案"
      type="error"
    >
    </el-alert>
    <el-form-item label="是否为范围选择（range）">
      <el-radio-group v-model="data.options.range">
        <el-radio :label="true">范围（range）</el-radio>
        <el-radio :label="false">数字（number）</el-radio>
      </el-radio-group>
    </el-form-item>
    <div class="value">
      <!-- 多选数组 -->
      <template v-if="data.options.range">
        <div>绑定值：</div>
        <div>
          v-model（range：区间）动态设置无效，只能第一次设置，所以添加设置按钮
        </div>
        <div>注意：start（前者） 必须小于等于 end（后者）的值</div>
        <div style="margin-top: 10px">
          <el-input-number
            v-model="rangeArr[0]"
            :min="-999999999"
            :max="rangeArr[1]"
          >
          </el-input-number>
          -
          <el-input-number
            v-model="rangeArr[1]"
            :min="rangeArr[0]"
            :max="9999999999"
          >
          </el-input-number>
          <div style="margin-top: 10px">
            <el-button type="primary" @click="rangeChange">确认</el-button>
          </div>
        </div>
      </template>
      <!-- 单选字符串 -->
      <template v-else>
        绑定值：<el-input-number v-model="data.options.defaultValue">
        </el-input-number>
      </template>
    </div>
    <el-form-item label="	最小值（min）">
      <el-input-number v-model="data.options.min"></el-input-number>
    </el-form-item>
    <el-form-item label="最大值（max）">
      <el-input-number v-model="data.options.max"></el-input-number>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="步长（step）">
      <el-input-number v-model="data.options.step"></el-input-number>
    </el-form-item>
    <el-form-item label="是否显示输入框，仅在非范围选择时有效（show-input）">
      <el-radio-group v-model="data.options.showInput">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="在显示输入框的情况下，是否显示输入框的控制按钮（show-input-controls）"
    >
      <el-radio-group v-model="data.options.showInputControls">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入框的尺寸（input-size）">
      <el-radio-group v-model="data.options.inputSize">
        <el-radio-button label="large">large</el-radio-button>
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否显示间断点（show-stops）">
      <el-radio-group v-model="data.options.showStops">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否显示 tooltip（show-tooltip）">
      <el-radio-group>
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">不显示</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否竖向模式（vertical）">
      <el-radio-group v-model="data.options.vertical">
        <el-radio :label="true">竖向</el-radio>
        <el-radio :label="false">不竖向</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Slider 高度，竖向模式时必填（height：px）">
      <el-input v-model="data.options.height"></el-input>
    </el-form-item>
    <el-form-item label="屏幕阅读器标签（label）">
      <el-input v-model="data.options.label"></el-input>
    </el-form-item>
    <el-form-item
      label="输入时的去抖延迟，毫秒，仅在show-input等于true时有效（debounce）"
    >
      <el-input-number v-model="data.options.debounce"></el-input-number>
    </el-form-item>
    <el-form-item label="tooltip 的自定义类名（tooltip-class）">
      <el-input v-model="data.options.tooltipClass"></el-input>
    </el-form-item>
    <el-form-item
      label="标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式（marks）"
    >
      <el-button type="primary" @click="setMarks">设置marks</el-button>
    </el-form-item>
    <Dialog v-model="visible" title="提示">
      <div>请在 setting 中根据 model 添加 marks 方法</div>
      <pre>
        setting: {
          events: {
            test: {
              // 这里必须是一个方法调用，因为mark 最终需要的是一个对象
              marks: this.marksTest(),
            }
          }
        }
      </pre>
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
      rangeArr: [0, 0],
      visible: false,
    };
  },
  watch: {
    "data.options.range"(value) {
      if (value) {
        // this.data.options.defaultValue  = [0, 0]
        this.$set(this.data.options, "defaultValue", [0, 0]);
      } else {
        this.data.options.defaultValue = 0;
      }
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    rangeChange() {
      let start = this.rangeArr[0];
      let end = this.rangeArr[1];
      this.data.options.defaultValue = [start, end];
    },
    setMarks() {
      this.visible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-item {
  .value {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
}
</style>
