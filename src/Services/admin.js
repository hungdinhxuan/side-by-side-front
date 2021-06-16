import axiosClient from './axiosClient';

const adminAPI = {
    getUser: (pages) =>{
        return axiosClient.get(`/management/renter?page=${pages}`);
    },
}
export default adminAPI;