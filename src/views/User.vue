<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">User details</h1>
    </div>
    <div class="p-grid">
      <div class="p-col-4">
        <UserDetailsCard v-bind:user-details="userDetails"/>
      </div>

      <div class="p-col-8">
        <UserTabView/>
      </div>
    </div>
  </main-layout>
</template>

<script>
import {mapActions, mapState} from "vuex";
import MainLayout from "@/layouts/Main";
import UserDetailsCard from "@/components/User/UserDetailsCard";
import UserTabView from "@/components/User/UserTabView";

export default {
  name: "User",

  components: {
    UserTabView,
    UserDetailsCard,
    MainLayout,
  },

  data() {
    return {
      userId: this.$route.params.id,
      userDetails: {}
    }
  },

  computed: {
    ...mapState({
      user: state => state.users.user,
    }),
  },

  methods: {
    ...mapActions('users', [
      'getUserDetails'
    ]),
  },

  created() {
    this.getUserDetails(this.userId).then(() => {
      this.userDetails = this.user
    })
  },
}
</script>

<style scoped>

</style>