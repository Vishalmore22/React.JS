import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendance } from "../features/attendance/attendanceSlice";
import { fetchLeaves } from "../features/leaves/leavesSlice";
import SalarySlip from "../features/salary/SalarySlip";

export default function EmployeeSalary() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  useEffect(() => {
    dispatch(fetchAttendance());
    dispatch(fetchLeaves());
  }, [dispatch]);

  return <SalarySlip user={user} />;
}
