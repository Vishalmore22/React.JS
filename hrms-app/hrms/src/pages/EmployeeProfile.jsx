import { useSelector } from "react-redux";

export default function EmployeeProfile() {
  const user = useSelector((s) => s.auth.user);
  return (
    <div className="card">
      <h3>My Profile</h3>
      <table className="tbl">
        <tbody>
          <tr><td>Name</td><td>{user.name}</td></tr>
          <tr><td>Email</td><td>{user.email}</td></tr>
          <tr><td>Role</td><td>{user.role}</td></tr>
          <tr><td>Hourly Rate</td><td>₹{user.hourlyRate}</td></tr>
          <tr><td>Join Date</td><td>{user.joinDate}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
