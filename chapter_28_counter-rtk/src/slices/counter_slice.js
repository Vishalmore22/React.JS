//  create-Slice step

// step 1
// -> import createSlice from @reduxjs/toolkit
// -> how can we get @reduxjs/toolkit first install this package -> npm install @reduxjs/toolkit react-redux
import { createSlice } from "@reduxjs/toolkit"; // <- here is your step 1

const initialState = { value: 0 };

//step 2
// -> name your Slice like (const counterSlice = createSlice({ }))
// -> in that Slice we need three things name,initialState,reducers.

const counterSlice = createSlice({
  //<- create Slice

  name: "counter", // <- name your Slice
  initialState, // <- default state create variable give value in {}
  reducers: {
    // <- reducers hold all logic to update state
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

// step 3 export reducer to store file
export default counterSlice.reducer; //we have to store logic only that's why we export reducers
export const { increament, decreament } = counterSlice.actions; 
