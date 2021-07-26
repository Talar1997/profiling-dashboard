<template>
  <main-layout>
    Dashboard
  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";

export default {
  name: 'Charts',
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
