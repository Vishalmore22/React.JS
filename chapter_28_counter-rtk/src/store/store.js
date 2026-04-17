// step 1 import configureStore to create store.
import { configureStore } from "@reduxjs/toolkit";
// step 3 import data form slice
import counterReducer from "../slices/counter_slice.js";

const store = configureStore({
  //step 2 pass all logic here
  reducer: {
    counter: counterReducer,
  },
});

// step 4 export store to main.jsx
export default store;
 