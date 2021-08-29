import { createAction, Dispatch } from '@reduxjs/toolkit';
import { FETCH_AUTH_DATA_REQUEST, FETCH_AUTH_DATA_SUCCESS, FETCH_AUTH_DATA_FAILURE } from './types';

// Fetch Auth Data
export const fetchAuthDataRequest = createAction(FETCH_AUTH_DATA_REQUEST);
export const fetchAuthDataSuccess = createAction<any>(FETCH_AUTH_DATA_SUCCESS);
export const fetchAuthDataFailure = createAction<any>(FETCH_AUTH_DATA_FAILURE);

export const fetchAuthData = () => {
  return async (dispatch: Dispatch): Promise<void> => {
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
