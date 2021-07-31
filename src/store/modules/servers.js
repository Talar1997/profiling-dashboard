const serversLocalStorageKey = "SERVERS";

const state = () => ({
    all: [],
})

const getters = {
    getAll: state => state.all,
    getOwner: (state) => (id) => state.all.filter(el => el.owner._id === id)
}

const actions = {
    async getAllServers({commit}) {
        const servers = JSON.parse(localStorage.getItem(serversLocalStorageKey))
        commit('setServers', servers)
    },

    async createNewServer({commit}, server) {
        commit('pushServer', server)
    }
}

const mutations = {
    setServers(state, servers) {
        state.all = servers ? servers.sort((x, y) => Number(y.active) - Number(x.active)): []
    },

    pushServer(state, server) {
        const servers = JSON.parse(localStorage.getItem(serversLocalStorageKey))
        servers.push(server)
        localStorage.setItem(serversLocalStorageKey, servers)
        state.all.push(server)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}