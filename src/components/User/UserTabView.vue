<template>
  <Card class="page-content">
    <template #content>
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-book"></i>
            <span class="tabPanelHeader">User logs</span>
          </template>
          <PanelUserLogsTable v-bind:user-id="userId"/>
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-chart-bar"></i>
            <span class="tabPanelHeader">Activity chart</span>
          </template>
          <PanelUserActivityStatistics v-bind:user-id="userId"/>
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-id-card"></i>
            <span class="tabPanelHeader">Correlation chart</span>
          </template>
          <PanelUserCorrelationChart />
        </TabPanel>

        <TabPanel>
          <template #header>
            <i class="pi pi-shield"></i>
            <span class="tabPanelHeader">Actions</span>
          </template>
          <PanelUserActions />
        </TabPanel>
      </TabView>
    </template>
  </Card>
</template>

<script>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Card from "primevue/components/card/Card";
import PanelUserLogsTable from "@/components/User/PanelUserLogsTable";
import PanelUserActivityStatistics from "@/components/User/PanelUserActivityStatistics";
import PanelUserCorrelationChart from "@/components/User/PanelUserCorrelationChart";
import PanelUserActions from "@/components/User/PanelUserActions";

export default {
  name: "UserTabView",
  components: {
    PanelUserActions,
    PanelUserCorrelationChart,
    PanelUserActivityStatistics,
    PanelUserLogsTable,
    TabPanel,
    TabView,
    Card
  },
  data() {
    return {
      userId: this.$route.params.id,
    }
  },
}
</script>

<style scoped>
.tabPanelHeader{
  margin-left: 5px;
}
</style>