import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchLeaves, updateLeaveStatus } from "../features/leaves/leavesSlice";
import { fetchUsers } from "../features/users/usersSlice";

export default function ManagerLeaves() {
  const dispatch = useDispatch();
  const leaves = useSelector((s) => s.leaves.list);
  const users = useSelector((s) => s.users.list);

  useEffect(() => {
    dispatch(fetchLeaves());
    dispatch(fetchUsers());
  }, [dispatch]);

  const decide = async (leave, status) => {
    await dispatch(updateLeaveStatus({ id: leave.id, status, leave }));
    toast.success(`Leave ${status}`);
  };

  const userName = (id) => users.find((u) => u.id === id)?.name || "—";

  return (
    <div className="card">
      <h3>Leave Requests</h3>
      <table className="tbl">
        <thead><tr><th>Employee</th><th>Date</th><th>Reason</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {leaves.map((l) => (
            <tr key={l.id}>
              <td>{userName(l.userId)}</td>
              <td>{l.date}</td>
              <td>{l.reason}</td>
              <td><span className={`badge ${l.status}`}>{l.status}</span></td>
              <td>
                {l.status === "pending" && (
                  <>
                    <button className="btn-sm" onClick={() => decide(l, "approved")}>Approve</button>
                    <button className="btn-sm danger" onClick={() => decide(l, "rejected")}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {!leaves.length && <tr><td colSpan="5">No leave requests yet.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
