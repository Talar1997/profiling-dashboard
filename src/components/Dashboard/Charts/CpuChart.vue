<template>
  <div>
    <Chart type="bar" v-bind:data="chartData" v-bind:options="stackedOptions" ref="cpuChart"/>
  </div>
</template>

<script>
import Chart from 'primevue/chart';

export default {
  name: "CpuChart",

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
        labels: ['CPU usage'],
        datasets: [{
          type: 'bar',
          label: 'Used',
          backgroundColor: '#42A5F5',
          data: [0]
        }, {
          type: 'bar',
          label: 'Free',
          backgroundColor: '#66BB6A',
          data: [0]
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
            ticks: {
              autoSkipPadding: 30,
              autoSkip: true,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
            }
          }],
        }
      },
    }
  },

  methods: {
    assignUtilizationData(cpuData) {
      this.chartData.datasets[0].data = [cpuData.usage]
      this.chartData.datasets[1].data = [100 - cpuData.usage]

      this.$refs.cpuChart.refresh()
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