// Timezone-safe date utilities (fixes Sunday miscount bug)

const pad = (n) => String(n).padStart(2, "0");

// Format a Date as local YYYY-MM-DD (not UTC). Using toISOString() here
// was the bug: in +ve timezones (e.g. IST) it shifted dates back a day,
// which made some Sundays look like Saturdays and inflated working days.
export const toLocalDateStr = (dt) =>
  `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;

export const todayStr = () => toLocalDateStr(new Date());

// Parse a YYYY-MM-DD string as a LOCAL date (avoid UTC parsing of new Date(str))
export const parseLocalDate = (dateStr) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const isSunday = (dateStr) => parseLocalDate(dateStr).getDay() === 0;

export const monthRange = (year, month) => {
  // month: 0-11
  const days = [];
  const last = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= last; d++) {
    days.push(`${year}-${pad(month + 1)}-${pad(d)}`);
  }
  return days;
};

export const hoursBetween = (inTime, outTime) => {
  if (!inTime || !outTime) return 0;
  const ms = new Date(outTime) - new Date(inTime);
  return Math.max(0, ms / (1000 * 60 * 60));
};

export const formatTime = (iso) =>
  iso ? new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—";
