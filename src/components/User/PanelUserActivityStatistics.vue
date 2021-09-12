<template>
  <div>
    <UserActivityChart v-if="!isEmptyDataset" v-bind:utilization-data="mappedLogList"/>
    <div v-else style="padding: 20px">
      <EmptyInformation header-text="No activity here"
                        bottom-text="User didn't performed any actions"
                        icon="pi pi-search" size="6em"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {dateMixin} from "@/mixins/dateMixin";
import UserActivityChart from "@/components/User/UserActivityChart";
import EmptyInformation from "@/components/Common/EmptyInformation";

export default {
  name: "PanelUserActivityStatistics",
  components: {
    UserActivityChart,
    EmptyInformation
  },

  props: {
    userId: {
      type: String,
      default: "0"
    },
  },

  mixins: [dateMixin],

  data() {
    return {
      activityLimit: 20,
      loading: false,
      isEmptyDataset: false,
      logList: [],
      mappedLogList: []
    }
  },

  methods: {
    ...mapActions('logs', [
      'getNumberOfLogs',
      'getAllLogs'
    ]),

    async loadLazyData() {
      this.loading = true;

      this.getNumberOfLogs({performedBy: this.userId}).then(() => {
        this.totalRecords = this.numberOfLogs;
      })

      const query = {performedBy: this.userId}
      this.getAllLogs(query).then(() => {
        this.loading = false
        this.logList = this.logs
        if (this.logList.length === 0) this.isEmptyDataset = true
        else this.mapLogsByDate(this.logs)
      })
    },

    mapLogsByDate(logs) {
      const logsArray = logs.map(log => this.toClearDate(log.issuedAtISO))
      const unique = [...new Set(logsArray)];
      this.mappedLogList = unique
          .map(value => {
            return {date: value, actions: logsArray.filter(str => str === value).length}
          })
          .filter((a, b) => {
            if (new Date(a.date) === new Date(b.date)) return 0
            else if (new Date(a.date) > new Date(b.date)) return 1
            else return -1
          })
          .slice(-this.activityLimit)
    }
  },

  mounted() {
    this.loading = true;
    this.loadLazyData();
  },

  computed: {
    ...mapState({
      logs: state => state.logs.all,
      numberOfLogs: state => state.logs.numberOfLogs
    }),
  },
}
</script>

<style scoped>

</style>