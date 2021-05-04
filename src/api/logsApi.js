import {nodesUrl} from "apiUrls"
import {getDataCollection, getDataById} from "./dataFetchApi"

const endpointUrl = nodesUrl.logs

const fetchAllLogs = (params = null) => getDataCollection(endpointUrl, params)
const fetchLogById = (id) => getDataById(endpointUrl, id)

export {
  fetchAllLogs,
  fetchLogById
}