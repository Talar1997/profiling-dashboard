import axios from "axios"

export async function deleteDataRequest(nodeUrl, id, resolve, reject) {
  return axios
    .delete(nodeUrl + "/" + id)
    .then(response => {
      if (response.status === 204) {
        if (resolve) resolve()
        return Promise.resolve(response.data.data)
      } else {
        if (reject) reject()
        return Promise.reject(response.status)
      }
    })
    .catch(error => {
      if (reject) reject()
      if (error.response) return Promise.reject(error.response)
      else return Promise.reject(error)
    })
}