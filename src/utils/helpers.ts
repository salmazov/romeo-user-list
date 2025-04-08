import dayjs from "dayjs";

/**
 * Formats a timestamp to relative time (e.g., "3 hours ago")
 */
export const formatRelativeTime = (timestamp: string): string => {
  return dayjs(timestamp).fromNow();
};

/**
 * Rounds distance to 1 decimal place and appends unit
 */
export const formatDistance = (
  distance?: number,
  unit: string = "km"
): string => {
  return distance != null ? `${distance.toFixed(1)}` : `-${unit}`;
};
