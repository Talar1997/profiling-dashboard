<template>
  <Chart type="bar" v-bind:data="chartData" v-bind:options="stackedOptions" ref="activityChart"/>
</template>

<script>
import Chart from "primevue/chart";

export default {
  name: "UserActivityChart",
  components: {
    Chart,
  },
  props: {
    utilizationData: {
      type: Object,
      default: () => {
      }
    },
  },

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          type: 'bar',
          label: 'Actions',
          backgroundColor: '#1167b1',
          data: []
        }]
      },
      stackedOptions: {
        indexAxis: 'y',
        plugins: {
          tooltips: {
            mode: 'index',
            intersect: false
          },
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
            }
          }],
        },
      },
    }
  },

  methods: {
    clearDataset(){
      this.chartData.labels = []
      this.chartData.datasets[0].data = []

    },

    assignActivityData(cpuData) {
      this.clearDataset()
      cpuData.forEach(data => {
        this.chartData.labels.push(data.date)
        this.chartData.datasets[0].data.push(data.actions)
      })

      this.$refs.activityChart.refresh()
    }
  },

  watch: {
    utilizationData: function (newVal) {
      this.assignActivityData(newVal)
    }
  }
}
</script>

<style scoped>

</style>