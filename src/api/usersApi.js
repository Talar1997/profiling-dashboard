import {nodesUrl} from "apiUrls"
import {deleteData, getDataCollection, getDataById, patchData, postData} from "./dataFetchApi"

const endpointUrl = nodesUrl.users
const tokenValidationUrl = nodesUrl.authorization

const fetchAllUsers = (params = null) => getDataCollection(endpointUrl, params)
const fetchUserById = (id) => getDataById(endpointUrl, id)
const postUser = (object) => postData(endpointUrl, object)
const patchUser = (id, object, resolve, reject) => patchData(endpointUrl, id, object, resolve, reject)
const removeUser = (id, resolve, reject) => deleteData(endpointUrl, id, resolve, reject)
const validateUserToken = () => getDataCollection(tokenValidationUrl)

export {
  fetchAllUsers,
  fetchUserById,
  postUser,
  patchUser,
  removeUser,
  validateUserToken
}