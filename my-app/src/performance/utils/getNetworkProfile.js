export default function getNetworkProfile() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (!connection) return "fast";

  if (connection.saveData) return "slow";

  const type = connection.effectiveType;

  if (type === "2g" || type === "slow-2g") return "slow";
  if (type === "3g") return "medium";

  return "fast";
}