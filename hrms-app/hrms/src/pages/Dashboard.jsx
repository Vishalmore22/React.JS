import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((s) => s.auth.user);
  return (
    <div className="card">
      <h2>Welcome, {user.name}</h2>
      <p>Role: <b>{user.role}</b></p>
      <p>Use the navigation above to access your features.</p>
      {user.role === "admin"   && <p>👑 You have full user CRUD access.</p>}
      {user.role === "manager" && <p>📋 You can view all employees and approve leave requests.</p>}
      {user.role === "employee" && <p>🧑‍💼 You can mark attendance, apply for leave and download your salary slip.</p>}
    </div>
  );
}
