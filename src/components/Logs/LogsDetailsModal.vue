<template>
  <Dialog v-model:visible="isVisible"
          class="p-fluid log-modal"
          v-bind:modal="true">
    <template #header>
      <LogModalDialogHeader v-bind:log="log"/>
    </template>

    <hr class="hr-separator">
    <ActionDetailsLabelGroup v-bind:log="log"/>

    <hr class="hr-separator">
    <ActionPerformedByLabelGroup v-bind:log="log"/>

    <hr class="hr-separator">
    <TargetObjectLabelGroup v-bind:log="log"/>

    <template #footer>
      <Button v-on:click="closeDialog()">Close</Button>
    </template>

  </Dialog>
</template>

<script>
import Dialog from "primevue/components/dialog/Dialog";
import {logsMixin} from "@/mixins/logsMixin";
import Button from "primevue/components/button/Button";
import ActionDetailsLabelGroup from "@/components/Logs/ActionDetailsLabelGroup";
import LogModalDialogHeader from "@/components/Logs/LogModalDialogHeader";
import ActionPerformedByLabelGroup from "@/components/Logs/ActionPerformedByLabelGroup";
import TargetObjectLabelGroup from "@/components/Logs/TargetObjectLabelGroup";

export default {
  name: "LogsDetailsModal",
  components: {
    TargetObjectLabelGroup,
    ActionPerformedByLabelGroup,
    LogModalDialogHeader,
    ActionDetailsLabelGroup,
    Dialog,
    Button,
  },

  mixins: [logsMixin],

  data() {
    return {
      isVisible: false,
      log: {},
    }
  },

  mounted() {
    this.emitter.on("toggle-log-details-modal", log => {
      this.isVisible = true;
      this.log = log;
    });
  },

  methods: {
    closeDialog() {
      this.isVisible = false;
      this.log = {};
    }
  },
}
</script>

<style>
@import "../../assets/css/log-modal.css";
</style>