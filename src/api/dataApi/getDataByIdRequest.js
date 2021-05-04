import axios from "axios"

export async function getDataByIdRequest(nodeUrl, id) {
  return axios
    .get(nodeUrl + "/" + id)
    .then(response => {
      if (response.status === 200) return Promise.resolve(response.data.data)
      else {
        return Promise.reject("Cannot get data from node: " + (nodeUrl + "/" + id) + response.status)
      }
    })
    .catch(error => {
      if (error.response) return Promise.reject(error.response)
      else return Promise.reject(error)
    })
}