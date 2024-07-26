
export function getTimestamp(suffix = "") {
  console.log("Programmer ", suffix);
  return Date.now() + "-" + suffix
}