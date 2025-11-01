import axios from 'axios';
import qureyString from 'query-string';
import apiConfig from './apiConfig';

const AxiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => qureyString.stringify({...params, api_key: apiConfig.apiKey}),
});

axios.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    error => {
        throw error;
    }
);
export default AxiosClient;
