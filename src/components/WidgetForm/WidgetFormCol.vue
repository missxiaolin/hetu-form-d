<template>
  <div>
    <div v-if="data && data.options" class="widgetFromCol"></div>
  </div>
</template>

<script>
export default {
  name: "WidgetFormCol",
  components: {},
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
    element: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
    },
  },
  computed: {},
  created() {},
  updated() {},
  mounted() {},
  methods: {},
};
</script>