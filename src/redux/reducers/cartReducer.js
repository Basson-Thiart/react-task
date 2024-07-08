import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

// Initial state for the cart reducer
const initialState = {
  items: [], // Array to hold items in the cart
  totalCost: 0, // Total cost of all items in the cart
};

// Reducer function to manage state related to the shopping cart
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Adding a new item to the cart
      return {
        ...state, // Copy existing state
        items: [...state.items, action.payload], // Add new item to items array
        totalCost: state.totalCost + action.payload.price, // Update total cost
      };
    case REMOVE_FROM_CART:
      // Removing an item from the cart
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload // Filter out item with matching id
      );
      const totalCost = filteredItems.reduce(
        (total, item) => total + item.price, // Recalculate total cost after removal
        0
      );
      return {
        ...state, // Copy existing state
        items: filteredItems, // Update items array after filtering
        totalCost, // Update total cost
      };
    default:
      return state; // Return current state for unrecognized action types
  }
};

export default cartReducer;
