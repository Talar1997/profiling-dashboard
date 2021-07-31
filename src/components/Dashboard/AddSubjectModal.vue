<!--TODO: implement push to localStorage in store/modules/servers.js-->

<template>
  <Dialog v-model:visible="modalDialog"
          class="p-fluid add-subject-modal"
          header="Add new server"
          v-bind:modal="true">
    <div class="p-field">
      <label for="name">Name</label>
      <InputText id="name" v-model.trim="server.name" autofocus required="true"
                 v-bind:class="{'p-invalid': submitted && !server.name}"/>
      <small v-if="submitted && !server.name" class="p-invalid">Name is required</small>
    </div>
    <div class="p-field">
      <label for="ip_address">IP Address</label>
      <InputText id="ip_address" v-model.trim="server.ipAddress" required="true"
                 v-bind:class="{'p-invalid': submitted && !server.name}"/>
      <small v-if="submitted && !server.name" class="p-invalid">Server IP address is required</small>
    </div>
    <div class="p-field">
      <label for="api_key">Api key</label>
      <InputText id="api_key" v-model.trim="server.apiKey" required="true"
                 v-bind:class="{'p-invalid': submitted && !server.name}"/>
      <small v-if="submitted && !server.name" class="p-invalid">Api key is required</small>
    </div>


    <template #footer>
      <Button class="p-button-text p-button-secondary" icon="pi pi-times" label="Cancel" v-on:click="hideDialog"/>
      <Button class="p-button" icon="pi pi-check" label="Connect" v-on:click="connectServer"/>
    </template>
  </Dialog>
</template>

<script>
import Button from "primevue/components/button/Button";
import InputText from "primevue/components/inputtext/InputText";
import Dialog from "primevue/components/dialog/Dialog";
import {mapActions} from "vuex";
import {notificationMixin} from "@/mixins/notificationMixin";
import {TOGGLE_ADD_SERVER_MODAL} from "events";

export default {
  name: "AddSubjectModal",
  components: {
    Dialog,
    InputText,
    Button,
  },

  data() {
    return {
      modalDialog: false,
      submitted: false,
      server: {},
    }
  },

  mixins: [
    notificationMixin
  ],

  methods: {
    ...mapActions('subjects', [
      'createNewSubject'
    ]),

    hideDialog() {
      this.modalDialog = false;
      this.submitted = false;
    },

    connectServer() {
      this.submitted = true;
      this.server.owner = JSON.parse(localStorage.getItem('user')).data.user._id;

      this.server.date.setHours(this.server.hours.getHours() + 1)
      this.server.date.setMinutes(this.server.hours.getMinutes())

      this.createNewSubject(this.server)
          .then(() => {
            this.pushSuccess("Success", "Added server to list");
            this.modalDialog = false;
            this.server = {};
          })
          .catch(() => {
            this.pushError("Error", "Cannot connect to server. Check address or API key");
          });
    }
  },
  mounted() {
    this.emitter.on(TOGGLE_ADD_SERVER_MODAL, isOpen => {
      this.modalDialog = isOpen;
      this.server = {};
      this.submitted = false;
    });
  }
}
</script>

<style scoped>
@import "../../assets/css/modal.css";
</style>