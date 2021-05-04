import axios from "axios"

export async function patchDataRequest(nodeUrl, id, object, resolve = null, reject = null) {
  return axios
    .patch(nodeUrl + "/" + id, object)
    .then(response => {
      if (response.status === 200) {
        if (resolve) resolve()
        return Promise.resolve(response.data.data.doc)
      } else {
        if (reject) reject()
        return Promise.reject(response.status)
      }
    })
    .catch(error => {
      if (error.response) return Promise.reject(error.response)
      else return Promise.reject(error)
    })
}