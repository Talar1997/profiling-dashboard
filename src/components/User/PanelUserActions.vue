<template>
  <div class="p-grid">
    <div class="p-col-3">
      <Button label="Invalidate JWT token" icon="pi pi-times" iconPos="right" />
    </div>
  </div>
  <div class="p-grid">
    <div class="p-col-3">
      <Button label="Block account" icon="pi pi-lock" iconPos="right" />
    </div>
  </div>
</template>

<script>
import Button from "primevue/components/button/Button";

export default {
  name: "PanelUserActions",
  components: {
    Button,
  },
}
</script>

<style scoped>

</style>