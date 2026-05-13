import { monthRange, isSunday, hoursBetween } from "./dateUtils";

/**
 * Salary rules:
 * - Workday 9:00–17:00 (8h), pay = hours worked * hourlyRate
 * - Sundays excluded entirely (every Sunday is a non-working day)
 * - 1 approved leave per month is FREE (paid as 8h), extras unpaid
 * - Absent on a working day = no pay
 * - Net Salary = (totalHours * hourlyRate) - Professional Tax
 */

// Default Professional Tax (monthly). Can be overridden via user.professionalTax.
export const DEFAULT_PROFESSIONAL_TAX = 200;

export function calculateSalary({ user, year, month, attendance, leaves }) {
  const days = monthRange(year, month);
  const userAtt = attendance.filter((a) => a.userId === user.id);
  const userLeaves = leaves.filter(
    (l) => l.userId === user.id && l.status === "approved",
  );

  let totalHours = 0;
  let workingDays = 0;
  let presentDays = 0;
  let paidLeaveDays = 0;
  let unpaidLeaveDays = 0;
  let absentDays = 0;
  let freeLeaveUsed = false;

  const breakdown = [];

  days.forEach((d) => {
    if (isSunday(d)) {
      breakdown.push({ date: d, status: "Sunday", hours: 0, pay: 0 });
      return;
    }
    workingDays++;
    const att = userAtt.find((a) => a.date === d);
    const leave = userLeaves.find((l) => l.date === d);

    if (att && att.checkIn && att.checkOut) {
      const h = hoursBetween(att.checkIn, att.checkOut);
      const cappedH = Math.min(h, 8);
      totalHours += cappedH;
      presentDays++;
      breakdown.push({
        date: d,
        status: "Present",
        hours: cappedH.toFixed(2),
        pay: (cappedH * user.hourlyRate).toFixed(2),
      });
    } else if (leave) {
      if (!freeLeaveUsed) {
        freeLeaveUsed = true;
        paidLeaveDays++;
        totalHours += 8;
        breakdown.push({
          date: d,
          status: "Paid Leave",
          hours: "8.00",
          pay: (8 * user.hourlyRate).toFixed(2),
        });
      } else {
        unpaidLeaveDays++;
        breakdown.push({ date: d, status: "Unpaid Leave", hours: 0, pay: 0 });
      }
    } else {
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      if (d <= todayStr) {
        absentDays++;
        breakdown.push({ date: d, status: "Absent", hours: 0, pay: 0 });
      } else {
        breakdown.push({ date: d, status: "—", hours: 0, pay: 0 });
      }
    }
  });

  const grossSalary = totalHours * user.hourlyRate;
  const professionalTax =
    user.professionalTax != null
      ? Number(user.professionalTax)
      : DEFAULT_PROFESSIONAL_TAX;
  const netSalary = Math.max(0, grossSalary - professionalTax);

  return {
    workingDays,
    presentDays,
    paidLeaveDays,
    unpaidLeaveDays,
    absentDays,
    totalHours: totalHours.toFixed(2),
    hourlyRate: user.hourlyRate,
    grossSalary: grossSalary.toFixed(2),
    professionalTax: professionalTax.toFixed(2),
    netSalary: netSalary.toFixed(2),
    breakdown,
  };
}
