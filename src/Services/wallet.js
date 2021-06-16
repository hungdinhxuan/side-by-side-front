import axiosClient from './axiosClient';

const walletAPI = {
    getWallet: () => {
        return axiosClient.get(`/wallet`);
    },
    patchWallet: (values) => {
        return axiosClient.patch(`/wallet`,values);
    }
}
export default walletAPI;