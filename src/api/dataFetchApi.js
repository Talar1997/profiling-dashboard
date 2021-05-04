import {getDataRequest} from "./dataApi/getDataRequest"
import {getDataByIdRequest} from "./dataApi/getDataByIdRequest"
import {postDataRequest} from "./dataApi/postDataRequest"
import {patchDataRequest} from "./dataApi/patchDataRequest"
import {deleteDataRequest} from "./dataApi/deleteDataRequest"

export async function getDataCollection(nodeUrl, params = null) {
  return getDataRequest(nodeUrl, params)
}

export async function getDataById(nodeUrl, id) {
  return getDataByIdRequest(nodeUrl, id)
}

export async function postData(nodeUrl, object) {
  return postDataRequest(nodeUrl, object)
}

export async function patchData(nodeUrl, id, object, resolveFn = null, rejectFn = null) {
  return patchDataRequest(nodeUrl, id, object, resolveFn, rejectFn)
}

export async function deleteData(nodeUrl, id, resolve = null, reject = null) {
  return deleteDataRequest(nodeUrl, id, resolve, reject)
}
