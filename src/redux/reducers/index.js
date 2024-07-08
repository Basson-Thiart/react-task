import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

// combineReducers from Redux combines multiple reducers into a single reducer function
// that manages different slices of state.
const rootReducer = combineReducers({
  // Define how each slice of state is handled by its corresponding reducer.
  cart: cartReducer, // cartReducer manages the 'cart' slice of state
  user: userReducer, // userReducer manages the 'user' slice of state
});

export default rootReducer;
