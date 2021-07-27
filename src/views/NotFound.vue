<template>
  <main-layout>
    <EmptyTab message="This page does not exist" title="404 error"></EmptyTab>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main";
import EmptyTab from "@/components/EmptyTab";

export default {
  name: "NotFound",
  components: {
    MainLayout,
    EmptyTab
  }
}
</script>

<style scoped>

</style>