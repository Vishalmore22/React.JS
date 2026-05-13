import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminUsers from "../pages/AdminUsers";
import ManagerEmployees from "../pages/ManagerEmployees";
import ManagerLeaves from "../pages/ManagerLeaves";
import EmployeeProfile from "../pages/EmployeeProfile";
import EmployeeAttendance from "../pages/EmployeeAttendance";
import EmployeeLeaves from "../pages/EmployeeLeaves";
import EmployeeSalary from "../pages/EmployeeSalary";

export default function AppRoutes() {
  const user = useSelector((s) => s.auth.user);
  return (
    <>
      {user && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="/admin/users" element={
            <ProtectedRoute roles={["admin"]}><AdminUsers /></ProtectedRoute>
          } />

          <Route path="/manager/employees" element={
            <ProtectedRoute roles={["manager", "admin"]}><ManagerEmployees /></ProtectedRoute>
          } />
          <Route path="/manager/leaves" element={
            <ProtectedRoute roles={["manager", "admin"]}><ManagerLeaves /></ProtectedRoute>
          } />

          <Route path="/employee/profile" element={
            <ProtectedRoute roles={["employee"]}><EmployeeProfile /></ProtectedRoute>
          } />
          <Route path="/employee/attendance" element={
            <ProtectedRoute roles={["employee"]}><EmployeeAttendance /></ProtectedRoute>
          } />
          <Route path="/employee/leaves" element={
            <ProtectedRoute roles={["employee"]}><EmployeeLeaves /></ProtectedRoute>
          } />
          <Route path="/employee/salary" element={
            <ProtectedRoute roles={["employee"]}><EmployeeSalary /></ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </>
  );
}
