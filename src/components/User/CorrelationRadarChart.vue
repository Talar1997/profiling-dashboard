<template>
  <div>
<!--    TODO: Proof of concept-->
    <Chart type="radar" v-bind:data="chartData"/>
  </div>
</template>

<script>
import Chart from "primevue/chart";

export default {
  name: "CorrelationRadarChart",

  components: {
    Chart,
  },

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Correlation with other users',
            backgroundColor: 'rgba(180,214,246,.5)',
            borderColor: 'rgba(17,103,177,.85)',
            pointBackgroundColor: 'rgba(180,214,246,.85)',
            pointBorderColor: 'rgba(17,103,177,.5)',
            pointHoverBackgroundColor: 'rgba(180,214,246,.5)',
            pointHoverBorderColor: 'rgba(17,103,177,.85)',
            data: []
          },
        ]
      },
      chartOption: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          r: {
            pointLabels: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
            angleLines: {
              color: '#ebedef'
            }
          }
        }
      }
    }
  },

  mounted() {
    this.clearDataset()

    for(let i = 0; i < 6; i++){
      this.chartData.labels.push(`User-${i}`)
      this.chartData.datasets[0].data.push(Math.random())
    }
  },

  methods: {
    clearDataset(){
      this.chartData.labels = []
      this.chartData.datasets[0].data = []
    },

    assignCorrelationData(cpuData) {
      this.clearDataset()
      let chartData = cpuData
      if(!Array.isArray(cpuData)) chartData = [cpuData]

      chartData.forEach(data => {
        this.chartData.labels.push(this.toClearDate(data.isoDate) + " " + this.toClearHour(data.isoDate))
        this.chartData.datasets[0].data.push(data.cpu.usage)
        this.chartData.datasets[1].data.push(100 - data.cpu.usage)
      })

      this.$refs.cpuChart.refresh()
    }
  },
}
</script>

<style scoped>

</style>