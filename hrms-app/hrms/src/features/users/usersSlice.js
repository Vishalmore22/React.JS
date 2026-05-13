import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const { data } = await api.get("/users");
  return data;
});

export const createUser = createAsyncThunk("users/create", async (user) => {
  const { data } = await api.post("/users", user);
  return data;
});

export const updateUser = createAsyncThunk("users/update", async (user) => {
  const { data } = await api.put(`/users/${user.id}`, user);
  return data;
});

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  await api.delete(`/users/${id}`);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchUsers.pending, (s) => { s.status = "loading"; })
      .addCase(fetchUsers.fulfilled, (s, a) => { s.status = "succeeded"; s.list = a.payload; })
      .addCase(fetchUsers.rejected, (s, a) => { s.status = "failed"; s.error = a.error.message; })
      .addCase(createUser.fulfilled, (s, a) => { s.list.push(a.payload); })
      .addCase(updateUser.fulfilled, (s, a) => {
        const i = s.list.findIndex((u) => u.id === a.payload.id);
        if (i >= 0) s.list[i] = a.payload;
      })
      .addCase(deleteUser.fulfilled, (s, a) => {
        s.list = s.list.filter((u) => u.id !== a.payload);
      });
  },
});

export default usersSlice.reducer;
