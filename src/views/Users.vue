<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">Users and results</h1>
    </div>

    <div v-if="usersLoading" class="p-grid">
      <div v-for="n in 8"
           :key="n"
           class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
        <LoadingCard></LoadingCard>
      </div>
    </div>

    <div v-else class="p-grid p-ai-stretch vertical-container">
      <div v-for="user in users"
           v-bind:key="user._id"
           class="p-col-3 p-md-6 p-lg-4 p-sm-12 p-xl-3">
        <div class="box box-stretched">
          <UserCard v-bind:user="user"></UserCard>
        </div>
      </div>
    </div>

  </main-layout>
</template>

<script>


import MainLayout from "@/layouts/Main";
import {mapActions, mapState} from "vuex";
import LoadingCard from "@/components/Dashboard/LoadingCard";
import UserCard from "@/components/Users/UserCard";

export default {
  name: 'Users',
  components: {
    MainLayout,
    LoadingCard,
    UserCard
  },
  data() {
    return {
      usersLoading: true,
      userId: JSON.parse(localStorage.getItem('user')).data.user._id,
    }
  },
  methods: {
    ...mapActions('users', [
      'getAllUsers'
    ]),
  },

  computed: {
    ...mapState({
      users: state => state.users.all,
    }),
  },

  async created() {
    this.getAllUsers().then(() => this.usersLoading = false)

    console.log(this.users)
  },

}
</script>

<style>
@import '../assets/css/global.css';
</style>
