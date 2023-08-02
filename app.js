//Current Date
let dateEl = document.getElementById("date");
let currDate = new Date().getFullYear();
dateEl.textContent = currDate;

// Count months working in Syllogia
function monthesInSyllogia() {
  const targetDate = new Date(2023, 3, 1); // April 2023 (Note: Months are 0-indexed, so April is 3)
  const currentDate = new Date();
  const diffInMonths =
    (currentDate.getFullYear() - targetDate.getFullYear()) * 12 +
    (currentDate.getMonth() - targetDate.getMonth());
  return diffInMonths;
}

const workingInSyllogiaCounter = document.getElementById("workingInSyllogia");
const monthsCount = monthesInSyllogia();
workingInSyllogiaCounter.textContent = `${monthsCount} months.`;
