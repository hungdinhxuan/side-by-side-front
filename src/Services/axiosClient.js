import axios from 'axios';
import qs from 'qs';
import { getCookie } from './handleCookie';


const axiosClient = axios.create({
    baseURL: "https://side-by-side-back.vercel.app/api",
    paramsSerializer: (params) => {
        return qs.stringify(params, {skipNulls: true});
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        //Xử lý trước khi gửi lên server
        // const userInfo = getCookie('token'); 
        // const userInfo = localStorage.getItem('token');
        const userInfo = getCookie('token')
        if(userInfo){
            // const {accessToken} = JSON.parse(userInfo); 
            // config.headers.Authorization = `Bearer ${accessToken}`; 
            config.headers.Authorization = userInfo;
            console.log(userInfo);
        }
        console.log(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default axiosClient;