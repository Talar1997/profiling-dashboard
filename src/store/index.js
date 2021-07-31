import {createLogger, createStore} from 'vuex'
import user from "@/store/modules/user";
import users from "@/store/modules/users";
import servers from "@/store/modules/servers";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        user,
        users,
        servers
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})