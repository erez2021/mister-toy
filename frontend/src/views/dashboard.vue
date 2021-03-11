<template>
  <div class="dashboard">
    <pie-chart v-if="toys.length" :toys="toys" class="chart" :options="chartOptions" />
  </div>
</template>

<script>
import pieChart from "@/cmps/pie-chart";

export default {
   data() {
    return {
      chartOptions: {
        colors:['#cc4243', '#fff333', '#ff6655']
      }
    }
  },
  components: {
    pieChart,
  },
  computed: {
    toys() {
      return this.$store.getters.toysForDisplay;
    }
  }
};
</script>
