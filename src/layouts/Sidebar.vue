<template>
  <div class="sidebar">
    <ul class="sidebar-ul">
      <div class="sidebar-sign">
        <p class="no-margin no-padding">Profiling Dashboard</p>
      </div>
      <RouterLinkElement id="dashboard" icon="pi-list" name="Dashboard"></RouterLinkElement>
<!--      <RouterLinkElement id="statistics" icon="pi-chart-line" name="Statistics"></RouterLinkElement>-->
      <RouterLinkElement id="users" icon="pi-sitemap" name="Users"></RouterLinkElement>
      <RouterLinkElement id="logs" icon="pi-book" name="Logs"></RouterLinkElement>
<!--      <RouterLinkElement id="servers" icon="pi-cloud" name="Servers"></RouterLinkElement>-->
<!--      <RouterLinkElement id="test" icon="pi-palette" name="TEST"></RouterLinkElement>-->
      <RouterLinkElement id="login" icon="pi-arrow-circle-left" name="Logout" v-on:click="logout"></RouterLinkElement>
      <AppFooter></AppFooter>
    </ul>

  </div>
</template>

<script>
import RouterLinkElement from "@/components/Sidebar/RouterLinkElement";
import AppFooter from './Footer.vue';

export default {
  name: "Sidebar",
  components: {RouterLinkElement, AppFooter},

  data() {
    return {}
  },

  methods: {
    logout() {
      this.$store.dispatch('user/logout')
          .then(() => {
            this.$router.push('login');
          })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/global.css';

.sidebar-sign {
  height: 50px;
  background-color: #1167b1;
  color: white;
  font-weight: bold;
  text-align: center;
}

.sidebar-sign p {
  padding: 15px !important;
  vertical-align: center;
  text-transform: uppercase;
}

.sidebar {
  min-height: 100vh;
  height: 100%;
  background-color: #f4f4f4;
  margin: 0 !important;
  padding: 0 !important;
  -webkit-box-shadow: -6px 0px 21px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: -6px 0px 21px -3px rgba(0, 0, 0, 0.56);
  box-shadow: -6px 0px 21px -3px rgba(0, 0, 0, 0.56);
}

.sidebar-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  height: 100%;
  overflow: auto;
}


</style>