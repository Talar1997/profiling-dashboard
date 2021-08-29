<template>
  <div>
    <Chart type="doughnut" :data="utilizationData"/>
  </div>
</template>

<script>
import Chart from 'primevue/chart';

export default {
  name: "MemoryDonutChart",

  components: {
    Chart,
  },
  props: {
    utilizationData: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style scoped>

</style>