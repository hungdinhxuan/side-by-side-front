import axios from 'axios';
import qs from 'qs';

const axiosClient = axios.create({
    baseURL: "https://elearning0706.cybersoft.edu.vn/api",
    paramsSerializer: (params) => {
        return qs.stringify(params, {skipNulls: true});
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        //Xử lý trước khi gửi lên server
        
        const userInfo = localStorage.getItem("userInfor");
        if(userInfo){
            const {accessToken} = JSON.parse(userInfo);
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        console.log(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default axiosClient;