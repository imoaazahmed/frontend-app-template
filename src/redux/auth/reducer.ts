// Types
import {
  FETCH_AUTH_DATA_REQUEST,
  FETCH_AUTH_DATA_SUCCESS,
  FETCH_AUTH_DATA_FAILURE,
} from "./types";

// Initial State
export interface State {
  obj: {
    loading: boolean;
    data: any;
    error: any;
  };
}

const initialState: State = {
  obj: {
    loading: true,
    data: {},
    error: "",
  },
};

// Reducer
export interface Action {
  type: string;
  payload: any;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_AUTH_DATA_REQUEST:
      return { ...state, obj: { ...state.obj, loading: true } };
    case FETCH_AUTH_DATA_SUCCESS:
      return {
        ...state,
        obj: { ...state.obj, loading: false, data: action.payload },
      };
    case FETCH_AUTH_DATA_FAILURE:
      return {
        ...state,
        obj: { ...state.obj, loading: false, error: action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
