<template>
  <div class="data-group">
    <h4>Action performed by</h4>
    <div class="p-field p-grid data-item">
      <label for="UserID" class="p-col-fixed" style="width:100px">User ID</label>
      <div class="p-col">
        <InputText id="userID" type="text" v-bind:disabled="true" v-bind:value="log.performedBy._id"/>
      </div>
    </div>
    <div class="p-field p-grid data-item">
      <label for="name" class="p-col-fixed" style="width:100px">Name</label>
      <div class="p-col">
        <InputText id="name" type="text" v-bind:disabled="true" v-bind:value="log.performedBy.name"/>
      </div>
    </div>
    <div class="p-field p-grid data-item">
      <label for="email" class="p-col-fixed" style="width:100px">Email</label>
      <div class="p-col">
        <InputText id="email" type="text" v-bind:disabled="true" v-bind:value="log.performedBy.email"/>
      </div>
    </div>
    <div class="p-field p-grid data-item">
      <label for="ip" class="p-col-fixed" style="width:100px">Remote Ip</label>
      <div class="p-col">
        <InputText id="ip" type="text" v-bind:disabled="true" v-bind:value="log.remoteIp"/>
      </div>
    </div>

  </div>
</template>

<script>
import {logsMixin} from "@/mixins/logsMixin";
import InputText from "primevue/components/inputtext/InputText";

export default {
  name: "ActionPerformedByLabelGroup",
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