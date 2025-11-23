export function generateUsername() {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  return `adminqa_automation_${dd}${mm}${ss}`;
}
