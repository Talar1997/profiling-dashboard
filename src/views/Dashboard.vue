<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Dashboard</h1>
    </div>
<!--    TODO: margin to fit-->
    <h2>Memory</h2>
    <div class="p-grid">
      <!--   1   -->

      <div class="p-col-6">
        <div class="p-col-12">
          <Card >
            <template #content>
              <p><strong>Free</strong>: {{ utilizationModel.memory.freeMemMb }}</p>
            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card>
            <template #content>
              <p><strong>Used</strong>: {{ utilizationModel.memory.usedMemMb }}</p>

            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card >
            <template #content>
              <p><strong>Total</strong>: {{ utilizationModel.memory.totalMemMb }}</p>
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

    <h2>CPU</h2>
    <div class="p-grid">
      <div class="p-col-6">
        <div class="p-col-12">
          <Card >
            <template #content>
              <p><strong>CPUs</strong>: {{ utilizationModel.cpu.cpus }}</p>

            </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card>
            <template #content>
              <p><strong>Usage</strong>: {{ utilizationModel.cpu.usage }}</p>
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
    <div class="p-grid">
      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Data details</h1>
            <div class="p-grid">
              <div class="p-col-6">
                <div>
                  <p><strong>Measure ID</strong>: {{ utilizationModel._id }}</p>
                  <p><strong>Measured</strong>: {{ toClearDatePrecise(utilizationModel.isoDate) }}</p>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <Card class="utilizationCard">
          <template #content>
            <h1>OS</h1>
            <div class="p-grid">
              <div class="p-col-3">
                <div>
                  <p><strong>Platform</strong>: {{ utilizationModel.os.platform }}</p>
                  <p><strong>IP Address</strong>: {{ utilizationModel.os.ip }}</p>
                </div>
              </div>
              <div class="p-col-9">
                <div v-if="utilizationModel.os.platform === 'win32'" class="win10bg" style="height: 200px; width: 200px" />
                <div v-else-if="utilizationModel.os.platform === 'debian'">

                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>

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
