<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Dashboard</h1>
    </div>
    <div class="p-grid">
      <!--   1   -->
      <div class="p-col-6">
        <Card class="utilizationCard">
          <template #content>
            <h1>Memory</h1>
            <div class="p-grid">
              <div class="p-col-3">
                <div>
                  <p><strong>Free</strong>: {{ utilizationModel.memory.freeMemMb }}</p>
                  <p><strong>Used</strong>: {{ utilizationModel.memory.usedMemMb }}</p>
                  <p><strong>Total</strong>: {{ utilizationModel.memory.totalMemMb }}</p>
                </div>
              </div>
              <div class="p-col-9">
                <MemoryChart v-bind:utilization-data="utilizationModel.memory"/>
              </div>
            </div>
          </template>
        </Card>


        <Card class="utilizationCard">
          <template #content>
            <h1>CPU</h1>
            <div class="p-grid">
              <div class="p-col-3">
                <div>
                  <p><strong>CPUs</strong>: {{ utilizationModel.cpu.cpus }}</p>
                  <p><strong>Usage</strong>: {{ utilizationModel.cpu.usage }}</p>
                </div>
              </div>
              <div class="p-col-9">
                <CpuChart v-bind:utilization-data="utilizationModel.memory"/>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!--2-->
<!--      <div class="p-col-6">-->
<!--        <Card class="utilizationCard">-->
<!--          <template #content>-->
<!--            <h1>Memory</h1>-->
<!--            <div class="p-grid">-->
<!--              <div class="p-col-3">-->
<!--                <div>-->
<!--                  <p><strong>Free</strong>: {{ utilizationModel.memory.freeMemMb }}</p>-->
<!--                  <p><strong>Used</strong>: {{ utilizationModel.memory.usedMemMb }}</p>-->
<!--                  <p><strong>Total</strong>: {{ utilizationModel.memory.totalMemMb }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="p-col-9">-->
<!--                <MemoryChart v-bind:utilization-data="utilizationModel.memory"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->
<!--        </Card>-->


<!--        <Card class="utilizationCard">-->
<!--          <template #content>-->
<!--            <h1>CPU</h1>-->
<!--            <div class="p-grid">-->
<!--              <div class="p-col-3">-->
<!--                <div>-->
<!--                  <p><strong>CPUs</strong>: {{ utilizationModel.cpu.cpus }}</p>-->
<!--                  <p><strong>Usage</strong>: {{ utilizationModel.cpu.usage }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="p-col-9">-->
<!--                <CpuChart v-bind:utilization-data="utilizationModel.memory"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->
<!--        </Card>-->
<!--      </div>-->

    </div>
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import MemoryChart from "@/components/Dashboard/Charts/MemoryChart";
import {mapActions, mapGetters} from "vuex";
import Card from "primevue/components/card/Card";
import CpuChart from "@/components/Dashboard/Charts/CpuChart";

export default {
  name: 'Dashboard',
  components: {
    CpuChart,
    MemoryChart,
    MainLayout,
    Card
  },
  data() {
    return {
      utilizationModel: {
        memory: {},
        cpu: {},
        os: {}
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
      'getCpuData',
      'getUtilization'
    ])
  },

  created() {
    this.getCurrentUtilization().then(() => {
      console.log(this.getUtilization)
      this.utilizationModel.memory = {...this.getMemoryData}
      this.utilizationModel.cpu = {...this.getCpuData}
      console.log(this.utilizationModel)
    })
  }

}
</script>

<style scoped>
@import '../assets/css/global.css';

.utilizationCard {
  margin: 5px !important;
}
</style>
