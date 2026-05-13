import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { todayStr } from "../../utils/dateUtils";

export const fetchAttendance = createAsyncThunk(
  "attendance/fetch",
  async () => {
    const { data } = await api.get("/attendance");
    return data;
  },
);

export const checkIn = createAsyncThunk(
  "attendance/checkIn",
  async (userId, { getState }) => {
    const date = todayStr();
    const existing = getState().attendance.list.find(
      (a) => a.userId === userId && a.date === date,
    );
    if (existing) return existing;
    const record = {
      userId,
      date,
      checkIn: new Date().toISOString(),
      checkOut: null,
    };
    const { data } = await api.post("/attendance", record);
    return data;
  },
);

export const checkOut = createAsyncThunk(
  "attendance/checkOut",
  async (userId, { getState }) => {
    const date = todayStr();
    const existing = getState().attendance.list.find(
      (a) => a.userId === userId && a.date === date,
    );
    if (!existing) throw new Error("Please check-in first");
    const updated = { ...existing, checkOut: new Date().toISOString() };
    const { data } = await api.put(`/attendance/${existing.id}`, updated);
    return data;
  },
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchAttendance.fulfilled, (s, a) => {
      s.list = a.payload;
    })
      .addCase(checkIn.fulfilled, (s, a) => {
        const i = s.list.findIndex((x) => x.id === a.payload.id);
        if (i >= 0) s.list[i] = a.payload;
        else s.list.push(a.payload);
      })
      .addCase(checkOut.fulfilled, (s, a) => {
        const i = s.list.findIndex((x) => x.id === a.payload.id);
        if (i >= 0) s.list[i] = a.payload;
      });
  },
});

export default attendanceSlice.reducer;
