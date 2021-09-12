<template>
<!--  TODO: statistics with activity based on logs for user-->
  <div>Content...</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {dateMixin} from "@/mixins/dateMixin";

export default {
  name: "PanelUserActivityStatistics",

  props: {
    userId: {
      type: String,
      default: "0"
    },
  },

  mixins: [dateMixin],

  data() {
    return {
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

      this.getNumberOfLogs({performedBy:this.userId}).then(() => {
        this.totalRecords = this.numberOfLogs;
      })

      const query = {performedBy: this.userId}
      this.getAllLogs(query).then(() => {
        this.loading = false
        this.logList = this.logs
        this.mapLogsByDate(this.logs)
        if(this.logList.length === 0) this.isEmptyDataset = true
      })
    },

    mapLogsByDate(logs){
      //TODO: reduce
      this.mappedLogList = logs.map(log => this.toClearDate(log.issuedAtISO))
      console.log(this.mappedLogList)
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