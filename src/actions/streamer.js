import {STREAMER_REQUEST,STREAMER_SUCCESS,STREAMER_FAILURE} from '../constants/streamer';

import streamerAPI from '../Services/streamerAPI';

export function getStreamerByPage(pages) {
    return async (dispatch) => {
        dispatch({type: STREAMER_REQUEST});
        try {
            const {data} = await streamerAPI.getStreamer(pages);
            dispatch({type: STREAMER_SUCCESS, payload: {data}})
        } catch (error) {
            
            // Báo lỗi
            dispatch({type: STREAMER_FAILURE, payload: {error: error.response.data}})
        }
    }
}
