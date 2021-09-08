<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Last 24 hours statistics and usage</h1>
    </div>
    <div class="p-grid">
      <!--   1   -->
      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Memory</h1>
            <MemoryLineChart v-bind:utilization-data="utilizationModel"/>
          </template>
        </Card>
      </div>
      <!--      2-->
      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>CPU</h1>
            <CpuChart v-bind:utilization-data="utilizationModel" v-bind:hideLabels="true" />
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Active users</h1>
            <!--TODO: add-->
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Actions performed</h1>
            <!--TODO: add-->
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
import {mapActions, mapGetters} from "vuex";
import moment from 'moment'
import MemoryLineChart from "@/components/Dashboard/Charts/MemoryLineChart";

export default {
  name: 'Statistics',
  components: {
    MainLayout,
    CpuChart,
    Card,
    MemoryLineChart
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

    async getUtilizationData() {
      this.getLastDayUtilization().then(() => {
        //TODO filter for one result per hour
        this.utilizationModel = this.lastDayUtilization
      })
    },

    filterUtilizationData(data){
      return data.map(utilization => {
        return {
          ...utilization,
          hour: moment(utilization.isoDate).format('HH')
        }
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
