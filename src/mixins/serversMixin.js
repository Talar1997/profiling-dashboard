const {mapActions} = require("vuex");
export const serversMixin = {
    data() {
        return {
            servers: null,
            serversLoading: true,
        }
    },

    methods: {
        isEmpty() {
            return this.servers === null || this.servers.length === 0;
        },

        stopLoadingDocuments(delay) {
            setTimeout(() => {
                this.serversLoading = false;
            }, delay);
        },

        ...mapActions('servers', [
            'getAllServers'
        ]),
    },
}