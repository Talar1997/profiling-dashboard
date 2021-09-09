import axios from "axios"
import {nodesUrl} from "@/utils/api-url"

export const userValidation = {
    getUserRole,
    isUserLoggedIn,
    isUserInRole,
    validateTokenOnServer,
    validateTokenTimestamp,
}

function isUserLoggedIn() {
    return getUser()
}

export function getUserRole(){
    let user = getUser()
    if(user) return user.data.user.role
    else return false
}

export function isUserInRole(role) {
    let user = getUser()
    let userRole = user.data.user.role
    return userRole === role
}

async function validateTokenOnServer() {
    if (isUserLoggedIn()) {
        let status = await axios
            .get(nodesUrl.authorization)
            .then(response => response.data)
            .catch(error => console.log(error))

        if(status && status.valid){
            return status.valid !== 'fail'
        }
    }
}

function validateTokenTimestamp() {
    let user = getUser()
    if (user) return new Date(user.expires) > new Date()
    else return false
}

function getUser() {
    const storedUser = localStorage.getItem('user')
    return JSON.parse(storedUser)
}