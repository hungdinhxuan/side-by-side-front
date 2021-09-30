import axiosClient from './axiosClient';

const streamerAPI = {
    getStreamer: (pages) =>{
        return axiosClient.get(`/player?page=${pages}`);
    }
}
export default streamerAPI;