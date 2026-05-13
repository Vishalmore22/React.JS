import { useState } from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { calculateSalary } from "../../utils/salaryUtils";

export default function SalarySlip({ user }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const attendance = useSelector((s) => s.attendance.list);
  const leaves = useSelector((s) => s.leaves.list);

  const result = calculateSalary({ user, year, month, attendance, leaves });

  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Salary Slip", 14, 18);
    doc.setFontSize(11);
    doc.text(`Employee: ${user.name}`, 14, 28);
    doc.text(`Email: ${user.email}`, 14, 34);
    doc.text(`Period: ${monthName} ${year}`, 14, 40);
    doc.text(`Hourly Rate: Rs. ${user.hourlyRate}`, 14, 46);

    autoTable(doc, {
      startY: 54,
      head: [["Metric", "Value"]],
      body: [
        ["Working Days (excl. Sundays)", result.workingDays],
        ["Present Days", result.presentDays],
        ["Paid Leave Days", result.paidLeaveDays],
        ["Unpaid Leave Days", result.unpaidLeaveDays],
        ["Absent Days", result.absentDays],
        ["Total Hours", result.totalHours],
        ["Gross Salary (Hours x Rate)", `Rs. ${result.grossSalary}`],
        ["Professional Tax", `Rs. ${result.professionalTax}`],
        ["Net Salary", `Rs. ${result.netSalary}`],
      ],
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 8,
      head: [["Date", "Status", "Hours", "Pay"]],
      body: result.breakdown.map((r) => [r.date, r.status, r.hours, r.pay]),
      styles: { fontSize: 8 },
    });

    doc.save(`salary-slip-${user.name}-${monthName}-${year}.pdf`);
  };

  return (
    <div className="card">
      <h3>Salary Slip</h3>
      <div className="row">
        <select value={month} onChange={(e) => setMonth(+e.target.value)}>
          {Array.from({ length: 12 }).map((_, i) => (
            <option key={i} value={i}>
              {new Date(2000, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
        <input type="number" value={year} onChange={(e) => setYear(+e.target.value)} style={{ width: 100 }} />
        <button className="btn" onClick={downloadPDF}>Download PDF</button>
      </div>

      <table className="tbl">
        <tbody>
          <tr><td>Working Days</td><td>{result.workingDays}</td></tr>
          <tr><td>Present</td><td>{result.presentDays}</td></tr>
          <tr><td>Paid Leave</td><td>{result.paidLeaveDays}</td></tr>
          <tr><td>Unpaid Leave</td><td>{result.unpaidLeaveDays}</td></tr>
          <tr><td>Absent</td><td>{result.absentDays}</td></tr>
          <tr><td>Total Hours</td><td>{result.totalHours}</td></tr>
          <tr><td>Hourly Rate</td><td>₹{result.hourlyRate}</td></tr>
          <tr><td>Gross Salary (Hours × Rate)</td><td>₹{result.grossSalary}</td></tr>
          <tr><td>Professional Tax</td><td>- ₹{result.professionalTax}</td></tr>
          <tr><td><b>Net Salary</b></td><td><b>₹{result.netSalary}</b></td></tr>
        </tbody>
      </table>
    </div>
  );
}
