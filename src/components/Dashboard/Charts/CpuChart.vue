<template>
  <div>
    <Chart type="bar" v-bind:data="chartData" v-bind:options="stackedOptions" ref="cpuChart"/>
  </div>
</template>

<script>
import Chart from 'primevue/chart';
import {dateMixin} from "@/mixins/dateMixin";

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
    hideLabels: {
      type: Boolean,
      default: false,
      required: false,
    }
  },

  mixins: [dateMixin],

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          type: 'bar',
          label: 'Used',
          backgroundColor: '#1167b1',
          data: []
        }, {
          type: 'bar',
          label: 'Free',
          backgroundColor: '#b4d6f6',
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
      this.chartData.datasets[1].data = []
    },

    assignUtilizationData(cpuData) {
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

  watch: {
    utilizationData: function(newVal) {
      this.assignUtilizationData(newVal)
    }
  },
}
</script>

<style scoped>

</style>