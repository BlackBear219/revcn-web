export interface metric {
    metricType: metricType,
    snapshotTime: string,
    value: number
}

export enum metricType {
    HOUSE_AMOUNT_TOTAL = "房屋总量",
    HOUSE_AMOUNT_SPECIAL = "102平米"
}