import axios from "axios"

export async function getDataRequest(nodeUrl, params) {
  return axios
    .get(nodeUrl, {params: params})
    .then(response => {
      if (response.status === 200) return Promise.resolve(response.data.data)
      else {
        return Promise.reject("Cannot get data from node: " + (nodeUrl) + response.status)
      }
    })
    .catch(error => {
      if (error.response) return Promise.reject(error.response)
      else return Promise.reject(error)
    })
}