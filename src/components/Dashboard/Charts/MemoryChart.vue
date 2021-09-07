<template>
  <div>
    <Chart type="pie" v-bind:data="chartData" ref="memoryChart"/>
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
            backgroundColor: ["#b4d6f6","#1167b1"],
            hoverBackgroundColor: ["#b4d6f6","#1167b1"],
          }
        ]
      }
    }
  },

  methods: {
    assignUtilizationData(memoryData) {
      this.chartData.datasets[0].data = [memoryData.freeMemMb, memoryData.usedMemMb]
      this.$refs.memoryChart.refresh()
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