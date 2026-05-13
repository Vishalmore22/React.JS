import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { fetchAttendance } from "../features/attendance/attendanceSlice";
import { todayStr, formatTime } from "../utils/dateUtils";

export default function ManagerEmployees() {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.users.list);
  const attendance = useSelector((s) => s.attendance.list);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchAttendance());
  }, [dispatch]);

  const employees = users.filter((u) => u.role === "employee");
  const today = todayStr();

  return (
    <div className="card">
      <h3>All Employees</h3>
      <table className="tbl">
        <thead><tr><th>Name</th><th>Email</th><th>Hourly Rate</th><th>Today Check-in</th><th>Today Check-out</th></tr></thead>
        <tbody>
          {employees.map((e) => {
            const att = attendance.find((a) => a.userId === e.id && a.date === today);
            return (
              <tr key={e.id}>
                <td>{e.name}</td><td>{e.email}</td><td>₹{e.hourlyRate}</td>
                <td>{formatTime(att?.checkIn)}</td>
                <td>{formatTime(att?.checkOut)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
