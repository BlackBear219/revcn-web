export interface Metric {
    metricType: MetricType,
    snapshotTime: string,
    value: number
}

export enum MetricType {
    HOUSE_AMOUNT_TOTAL = "房屋总量",
    HOUSE_AMOUNT_SPECIAL = "102平米"
}