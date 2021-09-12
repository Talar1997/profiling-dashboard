<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Last day statistics and usage</h1>
    </div>
    <div class="p-grid">

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Memory</h1>
            <MemoryLineChart v-if="!loadingUtilizationModel" v-bind:utilization-data="utilizationModel"/>
            <Skeleton v-else width="100%" height="20rem" />
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>CPU Utilization</h1>
            <CpuChart v-if="!loadingUtilizationModel" v-bind:utilization-data="utilizationModel" v-bind:hideLabels="true" />
            <Skeleton v-else width="100%" height="20rem" />

          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <UsersActiveIndicator v-if="!loadingLogs" v-bind:users-active="usersActive" />
            <Skeleton v-else width="100%" height="2rem" />
          </template>
        </Card>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <ActionsPerformedIndicator v-if="!loadingLogs" v-bind:actions="actionsPerformed" />
            <Skeleton v-else width="100%" height="2rem" />
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
import Skeleton from "primevue/components/skeleton/Skeleton";

export default {
  name: 'Statistics',
  components: {
    ActionsPerformedIndicator,
    UsersActiveIndicator,
    MainLayout,
    CpuChart,
    Card,
    MemoryLineChart,
    Skeleton
  },
  data() {
    return {
      utilizationModel: [],
      loadingUtilizationModel: true,
      loadingLogs: true,
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
      this.getLastDayUtilization()
          .then(() => {
            this.loadingUtilizationModel = false
          })
          .then(() => {
            if(this.lastDayUtilization.length > 50){
              this.utilizationModel = this.lastDayUtilization.filter((el, idx) => {
                if(idx % 5 === 0) return el;
              })
            }
            else this.utilizationModel = this.lastDayUtilization
          })
          .then(() => {
            this.getAllLogs().then(() => {
              this.loadingLogs = false
              const logs = this.getLogs.filter(log => log.timestamp > moment().subtract(1, 'days').format())
              this.actionsPerformed = logs.length
              this.usersActive = new Set(logs.map(log => log.performedBy._id)).size
            })
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
