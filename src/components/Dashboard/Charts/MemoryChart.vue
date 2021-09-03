<template>
  <div>
    <Chart type="pie" v-bind:data="chartData" ref="doughnutMemoryChart"/>
  </div>
</template>

<script>
import Chart from 'primevue/chart';

export default {
  name: "MemoryChart",

  components: {
    Chart,
  },
  props: {
    utilizationData: {
      type: Object,
      default: () => {}
    },
  },

  data() {
    return {
      chartData: {
        labels: ['Free memory','Memory in use'],
        datasets: [
          {
            data: null,
            backgroundColor: ["red","green"],
            hoverBackgroundColor: ["red","green"],
          }
        ]
      }
    }
  },

  methods: {
    assignUtilizationData(memoryData) {
      this.chartData.datasets[0].data = [memoryData.freeMemMb, memoryData.usedMemMb]
      this.$refs.doughnutMemoryChart.refresh()
    }
  },

  watch: {
    utilizationData: function(newVal) {
      this.assignUtilizationData(newVal)
    }
  },
}
</script>

<style scoped>

</style>