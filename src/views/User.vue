<template>
  <main-layout>
    <div class="page-header">
      <h1 class="page-header-h">User details</h1>
    </div>

    <div>
      {{userDetails}}
      <!--      TODO: user details box-->
      <!--      TODO: users log table-->
      <!--      TODO: activity statistics? Chart with action per day-->
    </div>
  </main-layout>
</template>

<script>
import {mapActions, mapState} from "vuex";
import MainLayout from "@/layouts/Main";

export default {
  name: "User",

  components: {
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
      console.log("aaa", this.user)
      this.userDetails = this.user
    })
  },
}
</script>

<style scoped>

</style>