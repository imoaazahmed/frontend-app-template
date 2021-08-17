import { PayloadAction } from '@reduxjs/toolkit';
import {
  FETCH_AUTH_DATA_REQUEST,
  FETCH_AUTH_DATA_SUCCESS,
  FETCH_AUTH_DATA_FAILURE,
} from './types';

// Initial State
interface StateType {
  obj: {
    loading: boolean;
    data: any;
    error: any;
  };
}

const initialState: StateType = {
  obj: {
    loading: true,
    data: {},
    error: '',
  },
};

// Reducer
const reducer = (state = initialState, action: PayloadAction): any => {
  switch (action?.type) {
    case FETCH_AUTH_DATA_REQUEST:
      return { ...state, obj: { ...state.obj, loading: true } };
    case FETCH_AUTH_DATA_SUCCESS:
      return {
        ...state,
        obj: { ...state.obj, loading: false, data: action?.payload },
      };
    case FETCH_AUTH_DATA_FAILURE:
      return {
        ...state,
        obj: { ...state.obj, loading: false, error: action?.payload },
      };

    default:
      return state;
  }
};

export default reducer;
