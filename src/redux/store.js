import { createStore } from "redux";
import rootReducer from "./reducers";

// Create Redux store with rootReducer and Redux DevTools extension middleware
const store = createStore(
  rootReducer, // Combined reducer function that handles all state slices
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools extension for debugging
);

export default store; // Export the created Redux store for application-wide use
