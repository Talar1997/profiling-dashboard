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
               v-bind:globalFilterFields="['name','country.name', 'company', 'representative.name']"
               v-on:page="onPage($event)"
               v-on:sort="onSort($event)"
               v-on:filter="onFilter($event)"
               v-model:filters="filters"
               ref="dt"
               filterDisplay="row"
               responsiveLayout="scroll">

      <Column field="level" header="Company" ref="level" v-bind:sortable="true">

      </Column>
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
// import InputText from "primevue/components/inputtext/InputText";
import {fetchAllLogs} from "@/api/logsApi";
import Column from "primevue/components/column/Column";

export default {
  name: "Logs",
  components: {
    MainLayout,
    DataTable,
    // InputText,
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
        {field: 'country.name', header: 'Action'},
        {field: 'company', header: 'Performed On'},
        {field: 'representative.name', header: 'Performed By'},
        {field: 'representative.name', header: 'Issued At'}
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
      await fetchAllLogs({page:1, limit:20}).then((results)=> {
        this.loading = false
        this.logList = results
      })
      console.log(this.logList)
    },
    onPage(event) {
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