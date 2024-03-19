import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '3169a9df82f14daa98bd83b59ddeeb1c'
    }
})