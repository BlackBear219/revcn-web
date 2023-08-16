import axios from "axios";
import { baseUrl, specialHouseMetricApi, totalHouseMetricApi } from "../constants/revcnApiUrl";
import { metric, metricType } from "../models/metric";
import { revcnResponse } from "../models/revcnResponse";
import { newIllegalResponse } from "../util/newIllegalResponse";

export const getHouseMetrics = async (metrcType: metricType) : Promise<revcnResponse<metric[]>> => {
    try {
        var targetUrl = metrcType === metricType.HOUSE_AMOUNT_SPECIAL ?
            specialHouseMetricApi : totalHouseMetricApi;
        var targetUrl = baseUrl + targetUrl;
        var response = await axios.get(targetUrl);
        var result = response.data as revcnResponse<metric[]>;
        return result;
    } catch (error) {
        console.log(error);
        return newIllegalResponse<metric[]>();
    }
}
