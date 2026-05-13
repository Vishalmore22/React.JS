import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  if (!user) return null;

  const handleLogout = () => {
    dispatch(logout());
    nav("/login");
  };

  return (
    <nav className="navbar">
      <div className="brand">HRMS</div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        {user.role === "admin" && <Link to="/admin/users">Users</Link>}
        {user.role === "manager" && <Link to="/manager/employees">Employees</Link>}
        {user.role === "manager" && <Link to="/manager/leaves">Leave Requests</Link>}
        {user.role === "employee" && <Link to="/employee/profile">My Profile</Link>}
        {user.role === "employee" && <Link to="/employee/attendance">Attendance</Link>}
        {user.role === "employee" && <Link to="/employee/leaves">Leaves</Link>}
        {user.role === "employee" && <Link to="/employee/salary">Salary</Link>}
      </div>
      <div className="user-box">
        {/* <span>{user.name} ({user.role})</span> */}
        <button className="btn-ghost" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
