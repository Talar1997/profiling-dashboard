<template>
  <Card>
    <template #content>
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>User logs</span>
          </template>
          <PanelUserLogsTable v-bind:user-id="userId"/>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>Activity chart</span>
          </template>
          <PanelUserActivityStatistics v-bind:user-id="userId"/>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>Correlation chart</span>
          </template>
          <PanelUserCorrelationChart />
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

export default {
  name: "UserTabView",
  components: {
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

</style>