import { configureStore } from "@reduxjs/toolkit";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      console.log(action.payload);
      return [...state, action.payload];
    }
    case "REMOVE_PRODUCT": {
      console.log(action.payload);
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      return newState;
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: cartReducer,
});
