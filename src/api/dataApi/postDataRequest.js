import axios from "axios"

export async function postDataRequest(nodeUrl, object) {
  return axios
    .post(nodeUrl, object)
    .then(response => {
      if (response.status === 201) return Promise.resolve(response.data.data)
      else return Promise.reject()
    })
    .catch(error => {
      if (error.response) return Promise.reject(error.response)
      else return Promise.reject(error)
    })
}