import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial State
interface StateType {
  isLoading: boolean;
  isFetching: boolean;
  data: any;
}

const initialState: StateType = {
  isLoading: true,
  isFetching: true,
  data: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.isFetching = true;
    },
    fetchPostsSuccess: (state, action: PayloadAction<StateType>) => {
      state.isLoading = false;
      state.isFetching = false;
      state.data = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;
