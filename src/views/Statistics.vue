<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Usage and statistics</h1>
    </div>
    Content...
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";

export default {
  name: 'Statistics',
  components: {
    MainLayout,
  },
  data() {
    return {
      subjects: null,
      subjectsLoading: true,
      userId: JSON.parse(localStorage.getItem('user')).data.user._id,
    }
  },

}
</script>

<style>
@import '../assets/css/global.css';
</style>
