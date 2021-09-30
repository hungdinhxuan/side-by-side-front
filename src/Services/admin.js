import axiosClient from './axiosClient';

const adminAPI = {
    getUser: (pages) =>{
        return axiosClient.get(`/management/renter?page=${pages}`);
    },
    updateUser: (values) =>{
        return axiosClient.put('/management/renter', values);
    },
    deleteUser: (id) =>{

        return axiosClient.delete(`/management/renter/${id._id}/force`,id);
    },
    addUser: (values) => {
        return axiosClient.post('/management/renter', values);
    }
    
}
export default adminAPI;