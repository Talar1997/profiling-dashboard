import {fetchCurrentUtilizationData} from "@/api/utilizationApi";

const state = () => ({
    currentUtilization: {},
})

const getters = {
    getUtilization: state => state.currentUtilization,
    getCpuData: state => state.currentUtilization.cpu,
    getMemoryData: state => state.currentUtilization.memory,
    getOsData: state => state.currentUtilization.os,
}

const actions = {
    async getCurrentUtilization({commit}){
        await fetchCurrentUtilizationData().then(result => {
            commit('setCurrentUtilizationData', result)
        })
    },
}

const mutations = {
    setCurrentUtilizationData(state, utilization) {
        state.currentUtilization = utilization
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}