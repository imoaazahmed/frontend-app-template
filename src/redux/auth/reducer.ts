import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial State
interface StateType {
  loading: boolean;
  data: any;
  error: any;
}

const initialState = {
  loading: true,
  data: {},
  error: '',
} as StateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchAuthDataRequest: (state) => {
      state.loading = true;
    },
    fetchAuthDataSuccess: (state, action: PayloadAction<StateType>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAuthDataFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAuthDataRequest, fetchAuthDataSuccess, fetchAuthDataFailure } = authSlice.actions;
export default authSlice.reducer;
