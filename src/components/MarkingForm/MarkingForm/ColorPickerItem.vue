<template>
  <div class="">
    <el-form-item label="绑定值（v-model）">
      <el-color-picker v-model="data.options.defaultValue"></el-color-picker>
      <el-input
        v-model="data.options.defaultValue"
        placeholder="请输入颜色值"
      ></el-input>
    </el-form-item>
    <el-form-item label="是否禁用（disabled）">
      <el-radio-group v-model="data.options.disabled">
        <el-radio :label="true">禁用</el-radio>
        <el-radio :label="false">不禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="尺寸（size）">
      <el-radio-group v-model="data.options.size">
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否支持透明度选择（show-alpha）">
      <el-radio-group v-model="data.options.showAlpha">
        <el-radio :label="true">支持</el-radio>
        <el-radio :label="false">不支持</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="写入 v-model 的颜色的格式（color-format）">
      <div style="color: red">
        hex（show-alpha 为 false）/ rgb（show-alpha 为 true）
      </div>
      <el-radio-group v-model="data.options.colorFormat">
        <el-radio-button label="hsl">hsl</el-radio-button>
        <el-radio-button label="hsv">hsv</el-radio-button>
        <el-radio-button label="hex">hex</el-radio-button>
        <el-radio-button label="rgb">rgb</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ColorPicker 下拉框的类名（popper-class）">
      <el-input v-model="data.options.popperClass"></el-input>
    </el-form-item>
    <el-form-item label="预定义颜色（predefine）">
      <template v-if="data.options.predefine">
        <div
          v-for="(item, index) in data.options.predefine"
          :key="index + Math.random()"
        >
          <el-row>
            <el-col :span="20">
              第{{ index + 1 }}个颜色值是：{{ item }}
            </el-col>
            <el-col :span="4">
              <el-color-picker
                v-model="data.options.predefine[index]"
              ></el-color-picker>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-button @click="addPredefineItem">添加颜色</el-button>
        </el-col>
        <el-col :span="6">
          <el-color-picker v-model="color"></el-color-picker>
        </el-col>
      </el-row>
    </el-form-item>
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
      color: "",
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    addPredefineItem() {
      if (!this.data.options.predefine) {
        this.data.options.predefine = [];
      }
      if (this.color && this.color !== "") {
        this.data.options.predefine.push(this.color);
        this.color = "";
      } else {
        this.$message.error("请选择颜色值");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
