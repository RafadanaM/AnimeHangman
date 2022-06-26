const HOUR = 3600;
const MINUTE = 60;

// src = https://www.codegrepper.com/code-examples/javascript/javascript+convert+seconds+into+hours+and+minutes
export const secondToHms = (second: number): string => {
  const h = Math.floor(second / HOUR);
  const m = Math.floor((second % HOUR) / MINUTE);
  const s = Math.floor((second % HOUR) % MINUTE);

  const hDisplay = h < 10 ? "0" + h : h.toString();
  const mDisplay = m < 10 ? "0" + m : m.toString();
  const sDisplay = s < 10 ? "0" + s : s.toString();

  return `${hDisplay}:${mDisplay}:${sDisplay}`;
};

export const differenceToTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setHours(24, 0, 0, 0);
  return Math.floor((tomorrow.getTime() - today.getTime()) / 1000);
};

export const getTomorrowMidNightDate = (today: Date) => {
  const date = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 1)
  )
    .toISOString()
    .split("T")[0];
  console.log("getTomorrowMidnightDate", date);

  return date;
};

export const generateCurrentDate = () => {
  const myDate = new Date();
  const date = new Date(
    Date.UTC(myDate.getFullYear(), myDate.getMonth(), myDate.getDate())
  )
    .toISOString()
    .split("T")[0];
  return date;
};
