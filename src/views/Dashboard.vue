<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Dashboard</h1>
    </div>
    <div class="page-header-h2">
      <h2>Memory</h2>
    </div>
    <div class="p-grid">
      <div class="p-col-6">
        <div class="p-col-12">
          <Card >
            <template #content>
              <span class="indicator-header">Free: <span class="span-indicator">{{ utilizationModel.memory.freeMemMb }} MB</span></span>
            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card>
            <template #content>
              <span class="indicator-header">Used: <span class="span-indicator">{{ utilizationModel.memory.usedMemMb }} MB</span></span>
            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card >
            <template #content>
              <span class="indicator-header">Total: <span class="span-indicator">{{ utilizationModel.memory.totalMemMb }} MB</span></span>
            </template>
          </Card>
        </div>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <MemoryChart v-bind:utilization-data="utilizationModel.memory" class="max-height-400"/>
          </template>
        </Card>
      </div>
    </div>

    <div class="page-header">
      <h2>CPU</h2>
    </div>
    <div class="p-grid">
      <div class="p-col-6">
        <div class="p-col-12">
          <Card >
            <template #content>
              <span class="indicator-header">CPUs: <span class="span-indicator">{{ utilizationModel.cpu.cpus }}</span></span>
            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card>
            <template #content>
              <span class="indicator-header">Usage: <span class="span-indicator">{{ utilizationModel.cpu.usage }}%</span></span>
            </template>
          </Card>
        </div>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <CpuChart v-bind:utilization-data="utilizationModel" class="max-height-400"/>
          </template>
        </Card>
      </div>
    </div>

      <!--2-->
    <div class="page-header-h2">
      <h2>System</h2>
    </div>
    <div class="p-grid">
      <div class="p-col-6">
        <div class="p-col-12">
          <Card >
            <template #content>
              <span class="indicator-header">Platform: <span class="span-indicator">{{ utilizationModel.os.platform }}</span></span>
            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card>
            <template #content>
              <span class="indicator-header">IP Address: <span class="span-indicator">{{ utilizationModel.os.ip }}</span></span>
            </template>
          </Card>
        </div>
      </div>

      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <div v-if="utilizationModel.os.platform === 'win32'" class="win10bg" style="height: 200px; width: 200px" />
            <div v-else-if="utilizationModel.os.platform === 'debian'" />
          </template>
        </Card>
      </div>
    </div>

    <div class="page-header-h2" style="text-align: center; padding: 25px">
      <i>Measured: {{ toClearDatePrecise(utilizationModel.isoDate) }} ({{utilizationModel._id}})</i>
    </div>
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import MemoryChart from "@/components/Dashboard/Charts/MemoryChart";
import {mapActions, mapGetters} from "vuex";
import Card from "primevue/components/card/Card";
import CpuChart from "@/components/Dashboard/Charts/CpuChart";
import {dateMixin} from "@/mixins/dateMixin";

export default {
  name: 'Dashboard',
  components: {
    CpuChart,
    MemoryChart,
    MainLayout,
    Card
  },

  mixins: [dateMixin],
  data() {
    return {
      utilizationModel: {
        memory: {},
        cpu: {},
        os: {}
      },
      utilizationInterval: null
    }
  },

  methods: {
    ...mapActions('utilization', [
      'getCurrentUtilization'
    ]),

    async getUtilizationData(){
      this.getCurrentUtilization().then(() => {
        this.utilizationModel = {...this.getUtilization}
      })
    }
  },
  computed: {
    ...mapGetters('utilization', [
      'getMemoryData',
      'getCpuData',
      'getUtilization',
      'getOsData'
    ])
  },

  created() {
    this.getUtilizationData()
  },

  mounted() {
    clearInterval(this.utilizationInterval)
    this.utilizationInterval = setInterval(this.getUtilizationData, 5000)
  },

  beforeUnmount() {
    clearInterval(this.utilizationInterval)
  }
}
</script>

<style scoped>
@import '../assets/css/global.css';
</style>
