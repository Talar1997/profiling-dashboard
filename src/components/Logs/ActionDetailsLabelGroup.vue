<template>
  <div class="data-group">
    <h4>Action details</h4>
    <div class="p-field p-grid data-item">
      <label for="issuedAtISO" class="p-col-fixed" style="width:100px">Issued at</label>
      <div class="p-col">
        <InputText id="issuedAtISO" type="text" v-bind:disabled="true" v-bind:value="log.issuedAtISO"/>
      </div>
    </div>
    <div class="p-field p-grid data-item">
      <label for="targetObject.name" class="p-col-fixed" style="width:100px">Performed on</label>
      <div class="p-col">
        <InputText id="targetObject.name" type="text" v-bind:disabled="true" v-bind:value="computeResourceType(log.action.url)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {logsMixin} from "@/mixins/logsMixin";
import InputText from "primevue/components/inputtext/InputText";

export default {
  name: "ActionDetailsLabelGroup",
  components: {
    InputText
  },
  props: {
    log: {
      type: Object,
      default: () => {}
    },
  },

  mixins: [logsMixin],
}
</script>

<style>
@import "../../assets/css/log-modal.css";
</style>