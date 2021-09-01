<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Dashboard</h1>
    </div>
    <MemoryDonutChart v-bind:utilization-data="utilizationModel.memory"/>
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import MemoryDonutChart from "@/components/Dashboard/Charts/MemoryDonutChart";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Dashboard',
  components: {
    MemoryDonutChart,
    MainLayout,
  },
  data() {
    return {
      utilizationModel: {
        memory: {}
      }
    }
  },

  methods: {
    ...mapActions('utilization', [
      'getCurrentUtilization'
    ]),
  },
  computed: {
    ...mapGetters('utilization', [
      'getMemoryData',
    ])
  },

  created() {
    this.getCurrentUtilization().then(() => {
      this.utilizationModel.memory = this.getMemoryData
      console.log(this.utilizationModel)
    })
  }

}
</script>

<style>
@import '../assets/css/global.css';
</style>
