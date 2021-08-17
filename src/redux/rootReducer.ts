import { combineReducers } from '@reduxjs/toolkit';

// App Reducers
import authReducer from '@redux/auth/reducer';

export default combineReducers({
  auth: authReducer,
});
