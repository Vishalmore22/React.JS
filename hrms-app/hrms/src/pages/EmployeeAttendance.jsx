import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchAttendance, checkIn, checkOut } from "../features/attendance/attendanceSlice";
import { todayStr, formatTime, hoursBetween } from "../utils/dateUtils";

export default function EmployeeAttendance() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const list = useSelector((s) => s.attendance.list);

  useEffect(() => { dispatch(fetchAttendance()); }, [dispatch]);

  const today = todayStr();
  const todayRec = list.find((a) => a.userId === user.id && a.date === today);
  const myHistory = list.filter((a) => a.userId === user.id).slice().reverse();

  const doCheckIn = async () => {
    const res = await dispatch(checkIn(user.id));
    if (res.meta.requestStatus === "fulfilled") toast.success("Checked in");
  };
  const doCheckOut = async () => {
    const res = await dispatch(checkOut(user.id));
    if (res.meta.requestStatus === "fulfilled") toast.success("Checked out");
    else toast.error("Please check-in first");
  };

  return (
    <div>
      <div className="card">
        <h3>Today — {today}</h3>
        <p>Check-in: <b>{formatTime(todayRec?.checkIn)}</b></p>
        <p>Check-out: <b>{formatTime(todayRec?.checkOut)}</b></p>
        <div className="row">
          <button className="btn" onClick={doCheckIn} disabled={!!todayRec?.checkIn}>Check In</button>
          <button className="btn" onClick={doCheckOut} disabled={!todayRec?.checkIn || !!todayRec?.checkOut}>Check Out</button>
        </div>
      </div>

      <div className="card">
        <h3>My Attendance History</h3>
        <table className="tbl">
          <thead><tr><th>Date</th><th>Check-in</th><th>Check-out</th><th>Hours</th></tr></thead>
          <tbody>
            {myHistory.map((a) => (
              <tr key={a.id}>
                <td>{a.date}</td>
                <td>{formatTime(a.checkIn)}</td>
                <td>{formatTime(a.checkOut)}</td>
                <td>{hoursBetween(a.checkIn, a.checkOut).toFixed(2)}</td>
              </tr>
            ))}
            {!myHistory.length && <tr><td colSpan="4">No records yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
