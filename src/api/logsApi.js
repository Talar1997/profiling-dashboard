import {nodesUrl} from "@/utils/api-url";
import { fetchData, fetchIdentifiedData,} from "./dataFetchApi";

const endpointUrl = nodesUrl.logs;
export const fetchAllLogs = (params = null) => fetchData(endpointUrl, params);
export const fetchLogById = (id) => fetchIdentifiedData(endpointUrl, id);