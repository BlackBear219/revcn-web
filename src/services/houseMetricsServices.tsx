import axios from "axios";
import { baseUrl, specialHouseLastMetricApi, specialHouseMetricsApi, totalHouseLastMetricApi, totalHouseMetricsApi } from "../constants/revcnApiUrl";
import { Metric, MetricType } from "../models/metric";
import { revcnResponse } from "../models/revcnResponse";
import { newIllegalResponse } from "../util/newIllegalResponse";

export const getHouseMetrics = async (metrcType: MetricType) : Promise<revcnResponse<Metric[]>> => {
    try {
        var targetUrl = metrcType === MetricType.HOUSE_AMOUNT_SPECIAL ?
            specialHouseMetricsApi : totalHouseMetricsApi;
        var targetUrl = baseUrl + targetUrl;
        var response = await axios.get(targetUrl);
        var result = response.data as revcnResponse<Metric[]>;
        return result;
    } catch (error) {
        console.log(error);
        return newIllegalResponse<Metric[]>();
    }
}

export const getHouseLastMetric = async (metricType: MetricType) : Promise<revcnResponse<Metric>> => {
    try {
        var targetUrl = metricType === MetricType.HOUSE_AMOUNT_SPECIAL ?
            specialHouseLastMetricApi : totalHouseLastMetricApi;
        var targetUrl = baseUrl + targetUrl;
        var response = await axios.get(targetUrl);
        var result = response.data as revcnResponse<Metric>;
        return result;
    } catch (error) {
        console.log(error);
        return newIllegalResponse<Metric>();
    }
}
