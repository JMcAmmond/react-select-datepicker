/**
 * Timezone-safe date utilities for react-select-datepicker
 * These functions avoid locale-dependent string parsing
 */

/**
 * Creates a Date object from year, month, day parameters
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @param day Day number (1-31)
 * @returns Date object in local timezone
 */
export const createSafeDate = (year: number, month: number, day: number): Date => {
  // Note: Date constructor expects month as 0-11, so we subtract 1
  return new Date(year, month - 1, day, 0, 0, 0, 0);
};

/**
 * Creates a Date object with smart date correction for invalid dates
 * If the day is too large for the month, it clamps to the last day of the month
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @param day Day number (1-31)
 * @returns Date object in local timezone with corrected day if needed
 */
export const createSmartDate = (year: number, month: number, day: number): Date => {
  const daysInMonth = getDaysInMonth(year, month);
  const correctedDay = Math.min(day, daysInMonth);

  // Note: Date constructor expects month as 0-11, so we subtract 1
  return new Date(year, month - 1, correctedDay, 0, 0, 0, 0);
};

/**
 * Creates a Date object for the first day of a given month/year
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @returns Date object for the first day of the month
 */
export const createFirstOfMonth = (year: number, month: number): Date => {
  return new Date(year, month - 1, 1, 0, 0, 0, 0);
};

/**
 * Normalizes a Date to local midnight to avoid timezone-related shifts
 * @param date Date to normalize
 * @returns Date at local midnight
 */
export const normalizeToLocalMidnight = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
};

/**
 * Checks if a date is valid (not NaN)
 * @param date Date object to check
 * @returns true if date is valid
 */
export const isValidDate = (date: Date): boolean => {
  return !isNaN(date.getTime());
};

/**
 * Checks if a specific year/month/day combination is valid
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @param day Day number (1-31)
 * @returns true if the date is valid
 */
export const isValidDateCombination = (year: number, month: number, day: number): boolean => {
  const date = createSafeDate(year, month, day);
  return (
    isValidDate(date) &&
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

/**
 * Gets the number of days in a specific month/year
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @returns Number of days in the month
 */
export const getDaysInMonth = (year: number, month: number): number => {
  // Using 0 for day parameter gets the last day of the previous month
  // So we go to next month (month) and day 0 to get last day of target month
  return new Date(year, month, 0).getDate();
};

/**
 * Gets all days in a month as an array of numbers
 * @param year Full year (e.g., 2024)
 * @param month Month number (1-12)
 * @returns Array of day numbers (1-31)
 */
export const getAllDaysInMonthSafe = (year: number, month: number): number[] => {
  const daysInMonth = getDaysInMonth(year, month);
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};
