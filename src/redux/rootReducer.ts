import { combineReducers } from '@reduxjs/toolkit';

// App Reducers
import featureFlags from '@redux/feature-flags/reducer';

export default combineReducers({
  featureFlags: featureFlags,
});
