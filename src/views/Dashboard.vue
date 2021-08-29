<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Dashboard</h1>
    </div>
    <MemoryDonutChart v-bind:utilization-data="null" />
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import MemoryDonutChart from "@/components/Dashboard/Charts/MemoryDonutChart";
import {fetchCurrentUtilizationData} from "@/api/utilizationApi";

export default {
  name: 'Dashboard',
  components: {
    MemoryDonutChart,
    MainLayout,
  },
  data() {
    return {
      utilizationModel: {}
    }
  },

  methods: {
    getData() {
      fetchCurrentUtilizationData().then(result => {
        console.log(result)
        this.utilizationModel = result
      })
    }
  },

  mounted() {
    this.getData()
  }

}
</script>

<style>
@import '../assets/css/global.css';
</style>
