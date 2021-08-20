<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">All logs</h1>
    </div>

    <DataTable v-bind:value="logList"
               v-bind:lazy="true"
               v-bind:paginator="true"
               v-bind:rows="10"
               v-bind:totalRecords="totalRecords"
               v-bind:loading="loading"
               v-bind:rowsPerPageOptions="[10,20,50]"
               v-on:page="onPage($event)"
               v-on:sort="onSort($event)"
               v-on:filter="onFilter($event)"
               v-model:filters="filters"
               ref="dt"
               filterDisplay="row"
               responsiveLayout="scroll">

      <!--      TODO: add badge for level-->
      <Column field="level" header="SEVERITY" ref="level" v-bind:sortable="true" headerStyle="width: 120px"/>
      <!--      TODO: add badge for action.method-->
      <Column field="action.method" header="ACTION" ref="action.method" v-bind:sortable="true" headerStyle="width: 120px" />
      <Column field="targetObject.name" header="TARGET" ref="targetObject.name" v-bind:sortable="true">
        <template #body="slotProps">
          <span>{{slotProps.data.action.url}}, id: {{slotProps.data.targetObject._id}}</span>
        </template>
      </Column>
      <Column field="performedBy.email" header="PERFORMED BY" ref="performedBy.email" v-bind:sortable="true" />

      <Column field="issuedAtISO" header="ISSUED AT" ref="issuedAtISO" v-bind:sortable="true" />
      <Column header="ACTIONS" ref="actions"  headerStyle="width: 100px"/>

<!--      <Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true">-->
<!--        <template #filter="{filterModel,filterCallback}">-->
<!--          <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by representative"/>-->
<!--        </template>-->
<!--      </Column>-->
    </DataTable>

  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main";
import DataTable from "primevue/components/datatable/DataTable";
import {fetchAllLogs, fetchNumberOfLogs} from "@/api/logsApi";
import Column from "primevue/components/column/Column";

export default {
  name: "Logs",
  components: {
    MainLayout,
    DataTable,
    Column
  },

  data() {
    return {
      loading: false,
      totalRecords: 0,
      logList: null,
      filters: {
        'name': {value: '', matchMode: 'contains'},
        'country.name': {value: '', matchMode: 'contains'},
        'company': {value: '', matchMode: 'contains'},
        'representative.name': {value: '', matchMode: 'contains'},
      },
      lazyParams: {},
      columns: [
        {field: 'level', header: 'Severity'},
        {field: 'action.method', header: 'Action'},
        {field: 'targetObject.name', header: 'Performed On'},
        {field: 'performedBy.email', header: 'Performed By'},
        {field: 'issuedAtISO', header: 'Issued At'},
      ]
    }
  },

  mounted() {
    this.loading = true;

    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: this.filters
    };

    this.loadLazyData();
  },

  methods: {
    async loadLazyData() {
      //TODO: change for vuex store

      await fetchNumberOfLogs().then(result => {
        this.totalRecords = result
      })

      await fetchAllLogs({page:1, limit:20}).then((results)=> {
        this.loading = false
        this.logList = results
      })

    },
    onPage(event) {
      //TODO: implement pagination onPage change
      console.log("on page event...")
      this.lazyParams = event;
      this.loadLazyData();
    },
    onSort(event) {
      this.lazyParams = event;
      this.loadLazyData();
    },
    onFilter() {
      this.lazyParams.filters = this.filters;
      this.loadLazyData();
    }
  },
}
</script>

<style scoped>

</style>