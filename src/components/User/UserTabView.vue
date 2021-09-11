<template>
  <Card>
    <template #content>
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>Header I</span>
          </template>
          <PanelUserLogsTable/>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>Header I</span>
          </template>
          <PanelUserActivityStatistics/>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar"></i>
            <span>Header II</span>
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

  props: {
    userId: {
      type: String,
      default: ""
    },
  },
}
</script>

<style scoped>

</style>