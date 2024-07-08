// Action types defined as constants to avoid typos and facilitate debugging
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_USER = "UPDATE_USER";

// Action creator function to add a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART, // Action type indicating adding to cart
  payload: product, // Data payload containing the product to be added
});

// Action creator function to remove a product from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART, // Action type indicating removing from cart
  payload: productId, // Data payload containing the ID of the product to be removed
});

// Action creator function to update user information
export const updateUser = (user) => ({
  type: UPDATE_USER, // Action type indicating updating user information
  payload: user, // Data payload containing the updated user information
});
