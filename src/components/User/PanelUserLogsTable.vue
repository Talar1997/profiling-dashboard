<template>
  <div>
    <DataTable v-if="!isEmptyDataset" v-bind:value="logList"
               v-bind:lazy="true"
               v-bind:paginator="true"
               v-bind:rows="pagination.limit"
               v-bind:totalRecords="totalRecords"
               v-bind:loading="loading"
               v-bind:rowsPerPageOptions="[10,20,30]"
               v-on:page="onPage($event)"
               v-on:sort="onSort($event)"
               v-on:filter="onFilter($event)"
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
    <div v-else style="padding: 20px">
      <EmptyInformation header-text="No logs here"
        bottom-text="User didn't performed any action"
        icon="pi pi-search" size="6em"/>
    </div>

    <LogsDetailsModal />
  </div>
</template>

<script>
import LogsDetailsModal from "@/components/Logs/LogsDetailsModal";
import DataTable from "primevue/components/datatable/DataTable";
import Column from "primevue/components/column/Column";
import Badge from "primevue/badge";
import Button from "primevue/components/button/Button";
import {logsMixin} from "@/mixins/logsMixin";
import {mapActions, mapState} from "vuex";
import EmptyInformation from "@/components/Common/EmptyInformation";

export default {
  name: "PanelUserLogsTable",

  props: {
    userId: {
      type: String,
      default: "0"
    },
  },

  components: {
    EmptyInformation,
    LogsDetailsModal,
    DataTable,
    Column,
    Badge,
    Button
  },

  mixins: [logsMixin],

  data() {
    return {
      loading: false,
      isEmptyDataset: false,
      totalRecords: 0,
      logList: null,
      columns: [
        {field: 'level', header: 'Severity'},
        {field: 'action.method', header: 'Action'},
        {field: 'targetObject.name', header: 'Performed On'},
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

      this.getNumberOfLogs({performedBy:this.userId}).then(() => {
        this.totalRecords = this.numberOfLogs;
      })

      const query = {performedBy:this.userId, page: this.pagination.currentPage, limit:this.pagination.limit}
      this.getAllLogs(query).then(() => {
        this.loading = false
        this.logList = this.logs
        if(this.logList.length === 0) this.isEmptyDataset = true
      })
    },

    openLogDetailsModal(log){
      this.emitter.emit("toggle-log-details-modal", log);
    },

    onPage(event) {
      this.pagination.currentPage = event.page + 1;
      this.pagination.limit = event.rows;
      this.$router.replace({ name: "User", query: {page: this.pagination.currentPage} })

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