<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Last 24 hours statistics and usage</h1>
    </div>
    <div class="p-grid">

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Memory</h1>
            <MemoryLineChart v-bind:utilization-data="utilizationModel"/>
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>CPU Utilization</h1>
            <CpuChart v-bind:utilization-data="utilizationModel" v-bind:hideLabels="true" />
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <UsersActiveIndicator v-bind:users-active="usersActive" />
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <ActionsPerformedIndicator v-bind:actions="actionsPerformed" />
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
import UsersActiveIndicator from "@/components/Dashboard/Statistics/UsersActiveIndicator";
import ActionsPerformedIndicator from "@/components/Dashboard/Statistics/ActionsPerformedIndicator";

export default {
  name: 'Statistics',
  components: {
    ActionsPerformedIndicator,
    UsersActiveIndicator,
    MainLayout,
    CpuChart,
    Card,
    MemoryLineChart
  },
  data() {
    return {
      utilizationModel: [],
      actionsPerformed: 0,
      usersActive: 0
    }
  },

  methods: {
    ...mapActions('utilization', [
      'getLastDayUtilization'
    ]),

    ...mapActions('logs', [
      'getAllLogs'
    ]),

    async getStatisticsData() {
      this.getLastDayUtilization().then(() => {
        this.utilizationModel = this.lastDayUtilization
      })

      this.getAllLogs().then(() => {
        const logs = this.getLogs.filter(log => log.timestamp > moment().subtract(1, 'days').format())
        this.actionsPerformed = logs.length
        this.usersActive = new Set(logs.map(log => log.performedBy._id)).size
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
    ]),

    ...mapGetters('logs', [
      'getLogs',
    ])
  },

  created() {
    this.getStatisticsData()
  }

}
</script>

<style>
@import '../assets/css/global.css';
</style>
