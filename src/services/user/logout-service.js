import axios from "axios"
import {nodesUrl} from "@/utils/api-url"

export async function logout() {
    return await axios.delete(nodesUrl.authorization)
        .then(() => removeUserFromStorage())
}

function removeUserFromStorage() {
    localStorage.removeItem('user')
}