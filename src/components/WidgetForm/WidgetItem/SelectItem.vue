<template>
  <div class="">
    <el-select
      v-model="data.options.defaultValue"
      :multiple="data.options.multiple"
      :disabled="data.options.disabled"
      :value-key="data.options.valueKey"
      :size="data.options.size"
      :clearable="data.options.clearable"
      :collapse-tags="data.options.collapseTags"
      :multiple-limit="data.options.multipleLimit"
      :name="data.options.name"
      :autocomplete="data.options.autocomplete"
      :placeholder="data.options.placeholder"
      :filterable="data.options.filterable"
      :allow-create="data.options.allowCreate"
      :remote="data.options.remote"
      :remote-method="remoteMethod"
      :loading="data.options.loading"
      :loading-text="data.options.loadingText"
      :no-match-text="data.options.noMatchText"
      :no-data-text="data.options.noDataText"
      :popper-class="data.options.popperClass"
      :reserve-keyword="data.options.reserveKeyword"
      :default-first-option="data.options.defaultFirstOption"
      :popper-append-to-body="data.options.popperAppendToBody"
      :automatic-dropdown="data.options.automaticDropdown"
    >
      <template v-if="data.options.isGroup">
        <el-option-group
          v-for="group in optionsGroup"
          :key="group.label"
          :label="group.label"
          :disabled="group.disabled"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-option-group>
      </template>
      <template v-else>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </template>
    </el-select>
  </div>
</template>

<script>
import mixins from "./mixins";
export default {
  name: "",
  components: {},
  mixins: [mixins],
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      optionsGroup: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      list: [],
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.list = this.states.map((item) => {
      return { value: item, label: item };
    });
  },
  methods: {
    remoteMethod(query) {
      this.data.options.loading = true;
      if (query !== "") {
        if (this.data.options.isGroup) {
          setTimeout(() => {
            this.optionsGroup = this.list.filter((item) => {
              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.data.options.loading = false;
          }, 1000);
        } else {
          setTimeout(() => {
            this.options = this.list.filter((item) => {
              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.data.options.loading = false;
          }, 1000);
        }
      } else {
        if (this.data.options.isGroup) {
          this.optionsGroup = [];
          this.data.options.loading = false;
        } else {
          this.options = [];
          this.data.options.loading = false;
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>
