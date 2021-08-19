import {fetchAllLogs, fetchLogById} from "@/api/logsApi";

const state = () => ({
    all: [],
    log: null
})

const getters = {
    getUsers: state => state.all,
}

const actions = {
    async getAllLogs({commit}) {
        await fetchAllLogs().then(result => {
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
    setLogs(state, logs) {
        state.all = logs
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