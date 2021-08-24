<template>
  <Dialog v-model:visible="isVisible"
          class="p-fluid log-modal"
          header="Logs details"
          v-bind:modal="true">
      <div>{{ log }}</div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/components/dialog/Dialog";

export default {
  name: "LogsDetailsModal",
  components: {
    Dialog,
  },

  data() {
    return {
      isVisible: false,
      log: {},
      submitted: false
    }
  },

  mounted() {
    this.emitter.on("toggle-log-details-modal", log => {
      this.isVisible = true;
      this.log = log;
      this.submitted = false;
    });
  }
}
</script>

<style>
.log-modal{
  width: 500px !important;
}
</style>