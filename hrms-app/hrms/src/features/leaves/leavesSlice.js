import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchLeaves = createAsyncThunk("leaves/fetch", async () => {
  const { data } = await api.get("/leaves");
  return data;
});

export const applyLeave = createAsyncThunk("leaves/apply", async (payload) => {
  const record = { ...payload, status: "pending", appliedAt: new Date().toISOString() };
  const { data } = await api.post("/leaves", record);
  return data;
});

export const updateLeaveStatus = createAsyncThunk(
  "leaves/updateStatus",
  async ({ id, status, leave }) => {
    const { data } = await api.put(`/leaves/${id}`, { ...leave, status });
    return data;
  }
);

const leavesSlice = createSlice({
  name: "leaves",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchLeaves.fulfilled, (s, a) => { s.list = a.payload; })
      .addCase(applyLeave.fulfilled, (s, a) => { s.list.push(a.payload); })
      .addCase(updateLeaveStatus.fulfilled, (s, a) => {
        const i = s.list.findIndex((x) => x.id === a.payload.id);
        if (i >= 0) s.list[i] = a.payload;
      });
  },
});

export default leavesSlice.reducer;
