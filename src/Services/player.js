import axiosClient from './axiosClient';

const playerAPI = {
    getPlayer: (player_id) =>{
        return axiosClient.get(`/profile?id=${player_id}`);
    }
}
export default playerAPI;