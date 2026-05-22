import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { todo_api } from "../utils/api.js";

const fetchTodos = createAsyncThunk("todos/get", async () => {
  const res = await axios.get(todo_api);
  return res.data;
});
const postTodos = createAsyncThunk("todos/post", async (data) => {
  const res = await axios.post(todo_api, data);
  return res.data;
});
const updateTodos = createAsyncThunk("todos/put", async () => {});
const deleteTodos = createAsyncThunk("todos/delete", async () => {});

const todoslice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = "success";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.error.message;
      })
      .addCase(postTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        state.isLoading = "success";
      })
      .addCase(postTodos.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
// 24:45 