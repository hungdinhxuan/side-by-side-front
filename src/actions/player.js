import {
  PLAYER_REQUEST,
  PLAYER_SUCCESS,
  PLAYER_FAILURE,
} from "../constants/player";

import playerAPI from "../Services/player";

export default function getPlayersById(player_id) {
  return async (dispatch) => {
    dispatch({ type: PLAYER_REQUEST });
    try {
      const { data } = await playerAPI.getPlayer(player_id);
    //   console.log(data.profile);
      dispatch({ type: PLAYER_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      dispatch({
        type: PLAYER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
