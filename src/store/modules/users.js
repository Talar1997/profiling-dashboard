import {fetchAllUsers, fetchUserById} from "@/api/usersApi";

const state = () => ({
    all: [],
    user: null
})

const getters = {
    getUsers: state => state.all,
}

const actions = {
    async getAllUsers({commit}) {
        await fetchAllUsers().then(result => {
            commit('setUsers', result)
        })
    },

    async getUserDetails({commit}, id){
        await fetchUserById(id).then(result => {
            commit('setUserDetails', result)
        })
    }
}

const mutations = {
    setUsers(state, users) {
        state.all = users
    },

    setUserDetails(state, user) {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}