<template>
  <span class="dialog-header">
        <h3>
          <Badge class="dialog-header-item" v-bind:value="log.level"
                 v-bind:severity="computeVariant(log.level)"></Badge>
          <Badge class="dialog-header-item" v-bind:value="log.action.method"
                 v-bind:severity="computeMethodVariant(log.action.method)"></Badge>
          <span class="dialog-header-item">Logs details</span>
        </h3>
  </span>
</template>

<script>
import {logsMixin} from "@/mixins/logsMixin";
import Badge from "primevue/components/badge/Badge";

export default {
  name: "LogModalDialogHeader",
  components: {
    Badge,
  },
  mixins: [logsMixin],
  props: {
    log: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style>
@import "../../assets/css/log-modal.css";
</style>