import { createSlice } from '@reduxjs/toolkit';
import featureFlags from '../../../feature-flags.json';

// Initial State
const initialState = {
  ...featureFlags,
};

const featureFlagsSlice = createSlice({
  name: 'feature-flags',
  initialState,
  reducers: {},
});

export default featureFlagsSlice.reducer;
