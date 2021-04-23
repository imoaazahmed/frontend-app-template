// Types
import {
  FETCH_AUTH_DATA_REQUEST,
  FETCH_AUTH_DATA_SUCCESS,
  FETCH_AUTH_DATA_FAILURE,
} from "./types";

// Fetch Auth Data
export const fetchAuthDataRequest = () => {
  return {
    type: FETCH_AUTH_DATA_REQUEST,
  };
};

export const fetchAuthDataSuccess = (data: any) => {
  return {
    type: FETCH_AUTH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchAuthDataFailure = (error: any) => {
  return {
    type: FETCH_AUTH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchAuthData = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAuthDataRequest());

      // Here's you can call your APIs
      const data = {};

      dispatch(fetchAuthDataSuccess(data));
    } catch (error) {
      dispatch(fetchAuthDataFailure(error));
    }
  };
};
