import { UPDATE_USER } from "../actions";

// Initial state for the user-related data
const initialState = {
  firstName: "",
  surname: "",
  username: "",
  email: "",
};

// Reducer function for managing user-related actions and state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      // Update the state with new user data from action payload
      return {
        ...state,
        ...action.payload, // Spread the payload to update corresponding state fields
      };
    default:
      // Return the current state if action type doesn't match
      return state;
  }
};

export default userReducer;
