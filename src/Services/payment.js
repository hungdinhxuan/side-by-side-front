import axiosClient from './axiosClient';

const paymentAPI = {
    postPayment: (values) =>{
        return axiosClient.post(`/payment`,values);
    },
    getPayment: () => {
        return axiosClient.get(`/payment`);
    }
}
export default paymentAPI;