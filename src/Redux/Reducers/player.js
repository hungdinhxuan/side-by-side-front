import {
  PLAYER_REQUEST,
  PLAYER_SUCCESS,
  PLAYER_FAILURE,
} from "../../constants/player.js";

import Swal from "sweetalert2"

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case PLAYER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data.profile };
    case PLAYER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default playerReducer;
