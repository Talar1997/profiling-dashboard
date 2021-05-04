import axios from "axios"
import {nodesUrl} from "../../api/apiUrls"
import {logout} from './logout-service'

export function login(email, password, token) {
  const credentials = {email, password, token}
  return axios
    .post(nodesUrl.authorization, credentials)
    .then(response => authorize(response))
}

async function authorize(response) {
  const responseStatus = response.status

  if (isOk(responseStatus)) {
    return processUser(response)
  } else if (isUnauthorized(responseStatus)) {
    return processRejection()
  }
}

function isOk(responseStatus) {
  return responseStatus === 200
}

function processUser(response) {
  const user = getUserFromResponse(response)
  saveUserInLocalStorage(user)
  return user
}

function saveUserInLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function getUserFromResponse(response) {
  return response.data
}

function isUnauthorized(responseStatus) {
  return responseStatus === 401
}

async function processRejection() {
  await logout()
  return Promise.reject("Unauthorized")
}
