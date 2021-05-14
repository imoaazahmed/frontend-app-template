import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Logger
// import logger from "redux-logger";

// Root Reducer
import rootReducer from '@redux/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk /*, logger*/] as const,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
