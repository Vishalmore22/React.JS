import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import attendanceReducer from "../features/attendance/attendanceSlice";
import leavesReducer from "../features/leaves/leavesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    attendance: attendanceReducer,
    leaves: leavesReducer,
  },
});
