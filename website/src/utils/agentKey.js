export function getAgentKey(name, ratings = {}) {
  const lower = (name || "").toLowerCase().trim();
  const sanitized = lower.replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "_");
  const withSpaces = lower.replace(/\s+/g, "_");
  const candidates = [sanitized, lower, withSpaces];
  return candidates.find((k) => ratings && ratings[k]) || sanitized;
}
