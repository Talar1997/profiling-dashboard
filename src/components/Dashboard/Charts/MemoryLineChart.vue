<template>
  <div>
    <Chart type="line" v-bind:data="chartData" v-bind:options="basicOptions" ref="memoryLineChart"/>
  </div>
</template>

<script>
import Chart from 'primevue/chart';
import {dateMixin} from "@/mixins/dateMixin";

export default {
  name: "MemoryLineChart",

  components: {
    Chart,
  },
  props: {
    utilizationData: {
      type: Object,
      default: () => {}
    },
  },

  mixins: [dateMixin],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Memory usage',
            data: [],
            fill: true,
            borderColor: '#1167b1',
            tension: .4,
            backgroundColor: '#b4d6f6'
          }
        ]
      },

      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#1167b1'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
        }
      },
    }
  },

  methods: {
    clearDataset(){
      this.chartData.labels = []
      this.chartData.datasets[0].data = []
    },

    assignUtilizationData(cpuData) {
      this.clearDataset()
      let chartData = cpuData
      if(!Array.isArray(cpuData)) chartData = [cpuData]

      chartData.forEach(data => {
        this.chartData.labels.push(this.toClearDate(data.isoDate) + " " + this.toClearHour(data.isoDate))
        this.chartData.datasets[0].data.push(data.memory.usedMemMb)
      })

      this.$refs.memoryLineChart.refresh()
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