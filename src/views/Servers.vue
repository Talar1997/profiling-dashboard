<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Server list</h1>
    </div>

    <div v-if="serversLoading" class="p-grid">
      <div v-for="n in 8"
           :key="n"
           class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
        <LoadingCard></LoadingCard>
      </div>
    </div>

    <div v-else class="p-grid p-ai-stretch vertical-container">
      <div v-for="subject in servers"
           v-bind:key="subject._id"
           class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
        <div class="box box-stretched">
          <ServerCard v-bind:subject="subject"></ServerCard>
        </div>
      </div>

      <div class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
        <AddServerCard></AddServerCard>
      </div>
    </div>
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import LoadingCard from "@/components/Dashboard/LoadingCard";
import ServerCard from "@/components/Dashboard/ServerCard";
import AddServerCard from "@/components/Dashboard/AddServerCard";

export default {
  name: 'Servers',
  components: {
    MainLayout,
    LoadingCard,
    ServerCard,
    AddServerCard
  },
  data() {
    return {
      servers: null,
      serversLoading: true,
      userId: JSON.parse(localStorage.getItem('user')).data.user._id,
    }
  },

}
</script>

<style>
@import '../assets/css/global.css';
</style>
