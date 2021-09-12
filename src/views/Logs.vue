<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">All logs</h1>
    </div>

    <DataTable v-bind:value="logList"
               v-bind:lazy="true"
               v-bind:paginator="true"
               v-bind:rows="pagination.limit"
               v-bind:totalRecords="totalRecords"
               v-bind:loading="loading"
               v-bind:rowsPerPageOptions="[10,20,30]"
               v-on:page="onPage($event)"
               v-on:sort="onSort($event)"
               v-on:filter="onFilter($event)"
               v-model:filters="filters"
               ref="dt"
               filterDisplay="row"
               responsiveLayout="scroll">

      <Column field="level" header="SEVERITY" ref="level" v-bind:sortable="true" headerStyle="width: 120px">
        <template #body="slotProps">
          <Badge v-bind:value="slotProps.data.level" v-bind:severity="computeVariant(slotProps.data.level)"></Badge>
        </template>
      </Column>

      <Column field="action.method" header="ACTION" ref="action.method" v-bind:sortable="true" headerStyle="width: 120px">
        <template #body="slotProps">
          <Badge v-bind:value="slotProps.data.action.method" v-bind:severity="computeMethodVariant(slotProps.data.action.method)"></Badge>
        </template>
      </Column>
      <Column field="targetObject.name" header="TARGET" ref="targetObject.name" v-bind:sortable="true">
        <template #body="slotProps">
          <span> {{computeResourceType(slotProps.data.action.url)}}</span>
        </template>
      </Column>
      <Column field="performedBy.email" header="PERFORMED BY" ref="performedBy.email" v-bind:sortable="true" />

      <Column field="issuedAtISO" header="ISSUED AT" ref="issuedAtISO" v-bind:sortable="true">
        <template #body="slotProps">
          <span> {{simplifyDate(slotProps.data.issuedAtISO)}}</span>
        </template>
      </Column>
      <Column v-bind:exportable="false" ref="actions" headerStyle="width: 150px">
        <template #body="slotProps">
          <Button icon="pi pi-info" class="p-button-outlined p-button-rounded p-button-info p-mr-2"
                  v-on:click="openLogDetailsModal(slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <LogsDetailsModal />
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main";
import DataTable from "primevue/components/datatable/DataTable";
import Column from "primevue/components/column/Column";
import Badge from 'primevue/badge';
import {logsMixin} from "@/mixins/logsMixin";
import Button from "primevue/components/button/Button";
import {mapActions, mapState} from "vuex";
import LogsDetailsModal from "@/components/Logs/LogsDetailsModal";

export default {
  name: "Logs",
  components: {
    LogsDetailsModal,
    MainLayout,
    DataTable,
    Column,
    Badge,
    Button
  },

  mixins: [logsMixin],

  data() {
    return {
      loading: false,
      totalRecords: 0,
      logList: null,
      columns: [
        {field: 'level', header: 'Severity'},
        {field: 'action.method', header: 'Action'},
        {field: 'targetObject.name', header: 'Performed On'},
        {field: 'performedBy.email', header: 'Performed By'},
        {field: 'issuedAtISO', header: 'Issued At'},
      ],
      pagination:{
        limit: 10,
        currentPage: 1,
      },
    }
  },

  mounted() {
    this.loading = true;

    const queryPage = this.$route.query.page
    if(queryPage)
      this.pagination.currentPage = queryPage;

    this.loadLazyData();
  },

  computed: {
    ...mapState({
      logs: state => state.logs.all,
      numberOfLogs: state => state.logs.numberOfLogs
    }),
  },

  methods: {
    ...mapActions('logs', [
        'getNumberOfLogs',
        'getAllLogs'
    ]),

    async loadLazyData() {
      this.loading = true;

      this.getNumberOfLogs().then(() => {
        this.totalRecords = this.numberOfLogs;
      })

      const query = {page: this.pagination.currentPage, limit:this.pagination.limit}
      this.getAllLogs(query).then(() => {
        this.loading = false
        this.logList = this.logs
      })
    },

    openLogDetailsModal(log){
      this.emitter.emit("toggle-log-details-modal", log);
    },

    onPage(event) {
      this.pagination.currentPage = event.page + 1;
      this.pagination.limit = event.rows;
      this.$router.replace({ name: "Logs", query: {page: this.pagination.currentPage} })

      this.loadLazyData();
    },

    onSort() {
      this.loadLazyData();
    },

    onFilter() {
      this.loadLazyData();
    },
  },
}
</script>

<style scoped>

</style>