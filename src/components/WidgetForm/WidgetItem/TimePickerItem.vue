<template>
  <div class="">
    <el-form-item label="是否Select：固定时间点（isSelect）">
      <el-radio-group v-model="data.options.isSelect">
        <el-radio :label="true">固定（Select）</el-radio>
        <el-radio :label="false">任意时间点</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="data.options.isSelect" class="box">
      <el-form-item label="开始时间（start），默认：09:00">
        <el-input v-model="data.options.selectOptions.start"></el-input>
      </el-form-item>
      <el-form-item label="结束时间（end），默认：18:00">
        <el-input v-model="data.options.selectOptions.end"></el-input>
      </el-form-item>
      <el-form-item
        label="间隔时间（step），默认：00:30 注意格式：不然会导致页面卡死（mm:ss）"
      >
        <el-input v-model="step"></el-input>
        <el-button type="primary" @click="setStep">确认设置</el-button>
      </el-form-item>
      <el-form-item
        label="最小时间，小于该时间的时间段将被禁用（minTime），默认：00:00"
      >
        <el-input v-model="data.options.selectOptions.minTime"></el-input>
      </el-form-item>
      <el-form-item label="最大时间，大于该时间的时间段将被禁用（maxTime）">
        <el-input v-model="data.options.selectOptions.maxTime"></el-input>
      </el-form-item>
    </div>
    <div v-else-if="!data.options.isSelect" class="box">
      <el-form-item label="可选时间段（selectableRange）">
        <el-radio-group v-model="isRange">
          <el-radio :label="true">数组</el-radio>
          <el-radio :label="false">字符串</el-radio>
        </el-radio-group>
        <template v-if="isRange">
          <!-- 数组 -->
          <div>示例：['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</div>
          <el-input v-model="rangeStart"></el-input>-
          <el-input v-model="rangeEnd"></el-input>
          <div style="color: red">{{ range }}</div>
        </template>
        <template v-else>
          <!-- 字符串 -->
          <div>示例：'18:30:00 - 20:30:00'</div>
          <el-input v-model="selectableRangeStr"></el-input>
          <div style="color: red">{{ selectableRangeStr }}</div>
        </template>
      </el-form-item>
      <el-button type="primary" @click="setSelectRange"
        >确定设置（selectableRange）</el-button
      >
      <el-form-item label="时间格式化(TimePicker)-format">
        <el-input v-model="data.options.pickerOptions.format"></el-input>
      </el-form-item>
    </div>
    <div style="margin-top: 20px">
      <template v-if="data.options.isSelect">
        <el-form-item label="绑定值（string）">
          <el-input v-model="data.options.defaultValue"></el-input>
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item label="绑定值（data）">
          <el-time-picker
            v-model="data.options.defaultValue"
            placeholder="任意时间点"
          >
          </el-time-picker>
        </el-form-item>
      </template>
      <el-form-item label="完全只读（readonly）">
        <el-radio-group v-model="data.options.readonly">
          <el-radio :label="true">只读</el-radio>
          <el-radio :label="false">false</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否禁用（disabled）">
        <el-radio-group v-model="data.options.disabled">
          <el-radio :label="true">禁用</el-radio>
          <el-radio :label="false">不禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本框可输入（editable）">
        <el-radio-group v-model="data.options.editable">
          <el-radio :label="true">可以</el-radio>
          <el-radio :label="false">不可以</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否显示清除按钮（clearable）">
        <el-radio-group v-model="data.options.clearable">
          <el-radio :label="true">显示</el-radio>
          <el-radio :label="false">不显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="输入框尺寸（size）">
        <el-radio-group v-model="data.options.size">
          <el-radio-button label="medium">medium</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
          <el-radio-button label="mini">mini</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="非范围选择时的占位内容（placeholder）">
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
      <el-form-item label="范围选择时开始日期的占位内容（start-placeholder）">
        <el-input v-model="data.options.startPlaceholder"></el-input>
      </el-form-item>
      <el-form-item label="范围选择时开始日期的占位内容（end-placeholder）">
        <el-input v-model="data.options.endPlaceholder"></el-input>
      </el-form-item>
      <el-form-item
        label="是否为时间范围选择，仅对<el-time-picker>有效（is-range）"
      >
        <el-radio-group v-model="data.options.isRange">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">不是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="是否使用箭头进行时间选择，仅对<el-time-picker>有效（arrow-control）"
      >
        <el-radio-group v-model="data.options.arrowControl">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">不是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="对齐方式（align）">
        <el-radio-group v-model="data.options.align">
          <el-radio-button label="left">left</el-radio-button>
          <el-radio-button label="center">center</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="TimePicker 下拉框的类名（popper-class）">
        <el-input v-model="data.options.popperClass"></el-input>
      </el-form-item>
      <el-form-item label="选择范围时的分隔符（range-separator）">
        <el-input v-model="data.options.rangeSeparator"></el-input>
      </el-form-item>
      <el-form-item
        label="可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象（value-format）"
      >
        <el-link
          target="_blank"
          type="primary"
          href="https://element.eleme.io/#/zh-CN/component/date-picker#ri-qi-ge-shi"
          >日期格式参考</el-link
        >
        <el-input v-model="data.options.valueFormat"></el-input>
      </el-form-item>
      <template v-if="data.options.isSelect">
        <el-form-item label="可选，选择器打开时默认显示的时间（string）">
          <el-input v-model="data.options['default-value']"></el-input>
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item label="可选，选择器打开时默认显示的时间（data）">
          <el-time-picker
            v-model="data.options['default-value']"
            placeholder="任意时间点"
          >
          </el-time-picker>
        </el-form-item>
      </template>
      <el-form-item label="原生属性（name）">
        <el-input v-model="data.options.name"></el-input>
      </el-form-item>
      <el-form-item label="自定义清空图标的类名（clear-icon）">
        <el-input v-model="data.options.clearIcon"></el-input>
      </el-form-item>
    </div>
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
      // step：设置
      step: "00:30",
      isRange: false,
      selectableRangeStr: "",
      rangeStart: "",
      rangeEnd: "",
    };
  },
  watch: {},
  computed: {
    range() {
      return [this.rangeStart, this.rangeEnd];
    },
  },
  created() {},
  mounted() {},
  methods: {
    setStep() {
      // 如果不合法，不允许确
      let values = this.step.split(":");
      if (values.length >= 2) {
        let hours = parseInt(values[0], 10);
        if (isNaN(hours)) {
          this.$message.error(`setp设置为：${this.step} 不合法`);
          this.step = "00:30";
          return;
        }
        if (hours === 0) {
          hours = hours + "0";
        } else if (hours < 10) {
          hours = "0" + hours;
        } else if (hours > 24) {
          this.step = "00:30";
          this.$message.error(`setp设置为：${this.step} 不合法`);
          return;
        }
        let minutes = parseInt(values[1], 10);
        if (isNaN(minutes)) {
          this.step = "00:30";
          this.$message.error(`setp设置为：${this.step} 不合法`);
          return;
        }
        if (minutes === 0) {
          minutes = minutes + "0";
        } else if (minutes < 10) {
          minutes = "0" + minutes;
        } else if (minutes > 60) {
          this.step = "00:30";
          this.$message.error(`setp设置为：${this.step} 不合法`);
          return;
        }
        this.step = hours + ":" + minutes;
        this.data.options.selectOptions.step = this.step;
      } else {
        this.$message.error(`setp设置为：${this.step} 不合法`);
        this.step = "00:30";
      }
    },
    // 设置
    setSelectRange() {
      if (this.isRange) {
        this.data.options.pickerOptions.selectableRange = this.range;
      } else {
        this.data.options.pickerOptions.selectableRange = this.selectableRangeStr;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding: 5px;
  border: 1px solid #e0e0e0;
}
</style>
