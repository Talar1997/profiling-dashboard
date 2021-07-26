<template>
  <footer class="layout-footer">
    <span class="footer-text" style="margin-right: 5px">Profiling Dashboard</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped>
.layout-footer {
  margin-top: 15px;
  text-align: center;
}
</style>