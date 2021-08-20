import {nodesUrl} from "@/utils/api-url";
import { fetchData, fetchIdentifiedData,} from "./dataFetchApi";

const endpointUrl = nodesUrl.logs;
const numberOfLogsUrl = nodesUrl.numberOfLogs;
export const fetchAllLogs = (params = null) => fetchData(endpointUrl, params);
export const fetchNumberOfLogs = (params = null) => fetchData(numberOfLogsUrl, params);
export const fetchLogById = (id) => fetchIdentifiedData(endpointUrl, id);