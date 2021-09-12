import {fetchAllLogs, fetchLogById, fetchNumberOfLogs} from "@/api/logsApi";

const state = () => ({
    all: [],
    numberOfLogs: 0,
    log: null
})

const getters = {
    getLogs: state => state.all,
    getLogsNumber: state => state.numberOfLogs,
}

const actions = {
    async getNumberOfLogs({commit}, query){
        await fetchNumberOfLogs(query).then(result => {
            commit('setNumberOfAllLogs', result)
        })
    },

    async getAllLogs({commit}, query) {
        await fetchAllLogs(query).then(result => {
            commit('setLogs', result)
        })
    },

    async getLogDetails({commit}, id){
        await fetchLogById(id).then(result => {
            commit('setLogDetails', result)
        })
    }
}

const mutations = {
    setNumberOfAllLogs(state, number) {
        state.numberOfLogs = number
    },

    setLogs(state, logs) {
        state.all = logs
        state.numberOfLogs = logs.length
    },

    setLogDetails(state, log) {
        state.log = log
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}