export interface revcnResponse<T> {
    message: string,
    status: string,
    statusCode: statusCode,
    data: T | null
}

export enum statusCode {
    Illegal = "非法请求"
}