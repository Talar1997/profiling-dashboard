import {fetchCurrentUtilizationData, fetchLastDayUtilizationData} from "@/api/utilizationApi";

const state = () => ({
    currentUtilization: {},
    lastDayUtilization: []
})

const getters = {
    lastDayUtilization: state => state.lastDayUtilization,
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

    async getLastDayUtilization({commit}){
        await fetchLastDayUtilizationData().then(result => {
            commit('setLastDayUtilizationData', result)
        })
    }
}

const mutations = {
    setCurrentUtilizationData(state, utilization) {
        state.currentUtilization = {...utilization}
    },

    setLastDayUtilizationData(state, utilizationList){
        state.lastDayUtilization = utilizationList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}