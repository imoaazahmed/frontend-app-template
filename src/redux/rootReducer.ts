import { combineReducers } from '@reduxjs/toolkit';

// App Reducers
import postsReducer from '@redux/posts/reducer';

export default combineReducers({
  posts: postsReducer,
});
