import axiosClient from './axiosClient';

const adminAPI = {
    getUser: (pages) =>{
        return axiosClient.get(`/management/renter?page=${pages}`);
    },
    updateUser: (values) =>{
        return axiosClient.put('/management/renter', values);
    }
}
export default adminAPI;