import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Redux DevTool
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import rootReducer from "@redux/rootReducer";

// Logger
// import logger from "redux-logger";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
