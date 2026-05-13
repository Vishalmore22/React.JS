import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchLeaves, applyLeave } from "../features/leaves/leavesSlice";

export default function EmployeeLeaves() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const leaves = useSelector((s) => s.leaves.list);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => { dispatch(fetchLeaves()); }, [dispatch]);

  const myLeaves = leaves.filter((l) => l.userId === user.id);

  const submit = async (e) => {
    e.preventDefault();
    if (!date || !reason) return;
    await dispatch(applyLeave({ userId: user.id, date, reason }));
    toast.success("Leave applied");
    setDate(""); setReason("");
  };

  return (
    <div>
      <div className="card">
        <h3>Apply for Leave</h3>
        <form onSubmit={submit} className="grid">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)} required />
          <button className="btn">Apply</button>
        </form>
        <p className="hint">Note: 1st approved leave/month is free. Extra approved leaves are unpaid.</p>
      </div>

      <div className="card">
        <h3>My Leave Requests</h3>
        <table className="tbl">
          <thead><tr><th>Date</th><th>Reason</th><th>Status</th></tr></thead>
          <tbody>
            {myLeaves.map((l) => (
              <tr key={l.id}>
                <td>{l.date}</td><td>{l.reason}</td>
                <td><span className={`badge ${l.status}`}>{l.status}</span></td>
              </tr>
            ))}
            {!myLeaves.length && <tr><td colSpan="3">No leaves yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
