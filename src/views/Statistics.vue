<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Usage and statistics</h1>
    </div>
    <div class="p-grid">
      <!--   1   -->
      <div class="p-col-12" style="height: 500px">
        <Card class="utilizationCard" >
          <template #content>
            <h1>Memory</h1>
            <MemoryChart v-bind:utilization-data="null" class="max-height-400"/>
          </template>
        </Card>


        <Card class="utilizationCard">
          <template #content>
            <h1>CPU</h1>
            <CpuChart v-bind:utilization-data="utilizationModel" class="max-height-400"/>
          </template>
        </Card>
      </div>
    </div>
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import CpuChart from "@/components/Dashboard/Charts/CpuChart";
import Card from "primevue/components/card/Card";
import MemoryChart from "@/components/Dashboard/Charts/MemoryChart";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Statistics',
  components: {
    MainLayout,
    CpuChart,
    Card,
    MemoryChart
  },
  data() {
    return {
      utilizationModel: []
    }
  },

  methods: {
    ...mapActions('utilization', [
      'getLastDayUtilization'
    ]),

    async getUtilizationData(){
      this.getLastDayUtilization().then(() => {
        //TODO filter for one result per hour
        this.utilizationModel = this.lastDayUtilization
      })
    }
  },
  computed: {
    ...mapGetters('utilization', [
      'lastDayUtilization',
    ])
  },

  created() {
    this.getUtilizationData()
  }

}
</script>

<style>
@import '../assets/css/global.css';
</style>
