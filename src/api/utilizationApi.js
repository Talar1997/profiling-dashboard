import {nodesUrl} from "@/utils/api-url";
import {fetchData, fetchIdentifiedData} from "./dataFetchApi";

const utilization = nodesUrl.utilization;
const utilizationLastDay = nodesUrl.utilizationLastDay;
const utilizationCurrent = nodesUrl.utilizationCurrent;

export const fetchAllUtilizationData = (params = null) => fetchData(utilization, params);
export const fetchLastDayUtilizationData = (params = null) => fetchData(utilizationLastDay, params);
export const fetchCurrentUtilizationData = (params = null) => fetchData(utilizationCurrent, params);
export const fetchUtilizationById = (id) => fetchIdentifiedData(utilization, id);