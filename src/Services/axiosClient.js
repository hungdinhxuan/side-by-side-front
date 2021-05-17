import axios from 'axios';
import qs from 'qs';
import { getCookie } from './handleCookie';
import {serverHost} from '../config'

const axiosClient = axios.create({
    baseURL: serverHost,
    paramsSerializer: (params) => {
        return qs.stringify(params, {skipNulls: true});
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        const userInfo = getCookie('token')
        if(userInfo){
            // const {accessToken} = JSON.parse(userInfo); 
            // config.headers.Authorization = `Bearer ${accessToken}`; 
            config.headers.Authorization = userInfo;
        }
        // console.log(config); 
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default axiosClient;