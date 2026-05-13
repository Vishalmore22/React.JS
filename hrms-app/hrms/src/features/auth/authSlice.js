import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const stored = JSON.parse(localStorage.getItem("hrms_user") || "null");

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/users?email=${encodeURIComponent(email)}`);
      const user = data[0];
      if (!user || user.password !== password) {
        return rejectWithValue("Invalid email or password");
      }
      const safe = { ...user };
      delete safe.password;
      localStorage.setItem("hrms_user", JSON.stringify(safe));
      return safe;
    } catch (e) {
      return rejectWithValue(e.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: stored, status: "idle", error: null },
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("hrms_user");
    },
  },
  extraReducers: (b) => {
    b.addCase(loginUser.pending, (s) => { s.status = "loading"; s.error = null; })
      .addCase(loginUser.fulfilled, (s, a) => { s.status = "succeeded"; s.user = a.payload; })
      .addCase(loginUser.rejected, (s, a) => { s.status = "failed"; s.error = a.payload; });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
