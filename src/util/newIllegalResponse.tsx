import { revcnResponse, statusCode } from "../models/revcnResponse"

export function newIllegalResponse<T>(): revcnResponse<T> {
    return {
        statusCode: statusCode.Illegal,
        message: "",
        status: "",
        data: null,
    };
}