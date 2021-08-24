import {createLogger, createStore} from 'vuex'
import user from "@/store/modules/user";
import users from "@/store/modules/users";
import servers from "@/store/modules/servers";
import logs from "@/store/modules/logs";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        user,
        users,
        servers,
        logs
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})