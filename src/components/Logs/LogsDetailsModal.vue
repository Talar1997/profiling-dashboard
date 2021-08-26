<template>
<!--  TODO: move to separate components each group of labels-->
  <Dialog v-model:visible="isVisible"
          class="p-fluid log-modal"
          v-bind:modal="true">
    <template #header>
      <span class="dialog-header">
        <h3>
          <Badge class="dialog-header-item" v-bind:value="log.level" v-bind:severity="computeVariant(log.level)"></Badge>
          <Badge class="dialog-header-item" v-bind:value="log.action.method" v-bind:severity="computeMethodVariant(log.action.method)"></Badge>
          <span class="dialog-header-item">Logs details</span>
        </h3>
      </span>
    </template>

    <hr class="hr-separator">

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

    <hr class="hr-separator">

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
    <hr class="hr-separator">
    <div class="data-group">
      <h4>Target object</h4>
      <div v-if="log.targetObject.before">
        Before
        <code>
          <div v-for="(value, propertyName) in log.targetObject.before" v-bind:key="propertyName">
            <strong v-if="isDifferent(propertyName)">{{propertyName}}: {{ value }}</strong>
            <span v-else>{{propertyName}}: {{ value }}</span>
          </div>
        </code>

        After
        <code>
          <div v-for="(value, propertyName) in log.targetObject.after" v-bind:key="propertyName">
            <strong v-if="isDifferent(propertyName)">{{propertyName}}: {{ value }}</strong>
            <span v-else>{{propertyName}}: {{ value }}</span>
          </div>
        </code>
      </div>
      <div v-else>
        <code>
          <div v-for="(value, propertyName) in log.targetObject" v-bind:key="propertyName">
            {{propertyName}}: {{ value }}
          </div>
        </code>
      </div>

    </div>

    <template #footer>
      <Button v-on:click="closeDialog()">Close</Button>
    </template>

  </Dialog>
</template>

<script>
import Dialog from "primevue/components/dialog/Dialog";
import Badge from "primevue/components/badge/Badge";
import {logsMixin} from "@/mixins/logsMixin";
import Button from "primevue/components/button/Button";
import InputText from "primevue/components/inputtext/InputText";

export default {
  name: "LogsDetailsModal",
  components: {
    Dialog,
    Badge,
    Button,
    InputText
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
    },

    isDifferent(propertyName){
      const before = JSON.stringify(this.log.targetObject.before[propertyName])
      const after = JSON.stringify(this.log.targetObject.after[propertyName])
      return before !== after
    }
  },
}
</script>

<style>
.p-dialog-header{
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.log-modal{
  width: 650px !important;
}
.dialog-header-item{
  margin: 3px;
}
.data-group{
  margin: 5px;
}

.data-item{
  padding: 5px !important;
}

code{
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #4e73df;
  color: #666;
  page-break-inside: avoid;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1em;
  display: block;
  word-wrap: break-word;
}

input:disabled{
  color: black;
}

hr.hr-separator {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>