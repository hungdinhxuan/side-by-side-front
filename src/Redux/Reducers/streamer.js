import {
  STREAMER_REQUEST,
  STREAMER_SUCCESS,
  STREAMER_FAILURE,
} from "../../constants/streamer";

const initialState = {
  dulieu: [],
  isLoading: false,
  error: null
};

function streamerReducer(state = initialState, action) {
  switch (action.type) {
    case STREAMER_REQUEST:
      return {...state, isLoading: true, error: null };
    case STREAMER_SUCCESS:
      return { ...state,isLoading: false ,dulieu: action.payload.data};
    case STREAMER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default streamerReducer;
