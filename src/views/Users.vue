<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Users</h1>
    </div>

    <Card class="page-content">
      <template #content>
        <div v-if="usersLoading" class="p-grid">
          <div v-for="n in 8"
               :key="n"
               class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
            <LoadingCard></LoadingCard>
          </div>
        </div>
        <DataView
            v-bind:value="userList"
            v-bind:layout="layout"
            v-bind:paginator="true"
            v-bind:rows="8"
            paginatorPosition="both"
            v-else>
          <template #header>
            <div class="p-grid p-nogutter">
              <div class="p-col-6" style="text-align: left">
                <InputText v-model="filter" optionLabel="label" placeholder="Filter" @change="onFilterChange()"/>
              </div>
            </div>
          </template>
          <template #grid="slotProps">
            <div class="p-col-3" style="padding: .5rem">
              <UserCard v-bind:user="slotProps.data"></UserCard>
            </div>
          </template>
        </DataView>

      </template>
    </Card>

  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import {mapActions, mapState} from "vuex";
import LoadingCard from "@/components/Dashboard/LoadingCard";
import UserCard from "@/components/Users/UserCard";
import DataView from 'primevue/dataview';
import InputText from "primevue/components/inputtext/InputText";
import Card from "primevue/components/card/Card";

export default {
  name: 'Users',
  components: {
    MainLayout,
    LoadingCard,
    UserCard,
    DataView,
    InputText,
    Card
  },
  data() {
    return {
      usersLoading: true,
      userId: JSON.parse(localStorage.getItem('user')).data.user._id,
      layout: 'grid',
      filter: null,
      userList: []
    }
  },
  methods: {
    ...mapActions('users', [
      'getAllUsers'
    ]),

    onFilterChange(){
      if(this.filter === "") this.userList = this.users
      else {
        this.userList = this.users.filter(user => {
          return user.name.toLowerCase().includes(this.filter.toLowerCase())
            || user._id.toLowerCase().includes(this.filter.toLowerCase())
            || user.email.toLowerCase().includes(this.filter.toLowerCase())
        })
      }
    },

    stopLoadingDocuments(delay) {
      setTimeout(() => {
        this.usersLoading = false;
      }, delay);
    },
  },

  computed: {
    ...mapState({
      users: state => state.users.all,
    }),
  },

  async created() {
    this.getAllUsers().then(() => {
      this.stopLoadingDocuments(500);
      this.userList = this.users;
    })
  },

}
</script>

<style>
@import '../assets/css/global.css';
.p-dataview .p-dataview-header{
  background-color: unset;
}
</style>
