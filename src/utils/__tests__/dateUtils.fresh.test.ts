import { describe, it, expect } from 'vitest';
import {
  createSafeDate,
  createSmartDate,
  isValidDateCombination,
  getDaysInMonth,
  getAllDaysInMonthSafe,
} from '../dateUtils';

describe('Date Utils', () => {
  describe('createSafeDate', () => {
    it('should create a valid date for normal inputs', () => {
      const date = createSafeDate(2024, 1, 15);
      expect(date.getFullYear()).toBe(2024);
      expect(date.getMonth()).toBe(0); // January is 0 in JS
      expect(date.getDate()).toBe(15);
    });

    it('should handle leap years correctly', () => {
      const leapYearDate = createSafeDate(2024, 2, 29);
      expect(leapYearDate.getFullYear()).toBe(2024);
      expect(leapYearDate.getMonth()).toBe(1); // February is 1 in JS
      expect(leapYearDate.getDate()).toBe(29);
    });

    it('should handle non-leap years correctly', () => {
      const date = createSafeDate(2023, 2, 28);
      expect(date.getFullYear()).toBe(2023);
      expect(date.getMonth()).toBe(1);
      expect(date.getDate()).toBe(28);
    });
  });

  describe('createSmartDate', () => {
    it('should clamp impossible dates to last valid day of month', () => {
      // Test February 31, 2026 (not leap year)
      const date1 = createSmartDate(2026, 2, 31);
      expect(date1.getFullYear()).toBe(2026);
      expect(date1.getMonth()).toBe(1); // February
      expect(date1.getDate()).toBe(28); // Should clamp to 28

      // Test February 30, 2024 (leap year)
      const date2 = createSmartDate(2024, 2, 30);
      expect(date2.getFullYear()).toBe(2024);
      expect(date2.getMonth()).toBe(1); // February
      expect(date2.getDate()).toBe(29); // Should clamp to 29

      // Test April 31, 2023
      const date3 = createSmartDate(2023, 4, 31);
      expect(date3.getFullYear()).toBe(2023);
      expect(date3.getMonth()).toBe(3); // April
      expect(date3.getDate()).toBe(30); // Should clamp to 30
    });

    it('should not change valid dates', () => {
      const date = createSmartDate(2024, 1, 31);
      expect(date.getFullYear()).toBe(2024);
      expect(date.getMonth()).toBe(0); // January
      expect(date.getDate()).toBe(31); // January has 31 days, should remain unchanged
    });
  });

  describe('isValidDateCombination', () => {
    it('should return true for valid dates', () => {
      expect(isValidDateCombination(2024, 1, 15)).toBe(true);
      expect(isValidDateCombination(2024, 2, 29)).toBe(true); // Leap year
    });

    it('should return false for invalid dates', () => {
      expect(isValidDateCombination(2023, 2, 29)).toBe(false); // Not leap year
      expect(isValidDateCombination(2024, 4, 31)).toBe(false); // April has 30 days
      expect(isValidDateCombination(2024, 13, 1)).toBe(false); // Invalid month
      expect(isValidDateCombination(2024, 0, 1)).toBe(false); // Invalid month
    });
  });

  describe('getDaysInMonth', () => {
    it('should return correct number of days for each month', () => {
      expect(getDaysInMonth(2024, 1)).toBe(31); // January
      expect(getDaysInMonth(2024, 2)).toBe(29); // February (leap year)
      expect(getDaysInMonth(2023, 2)).toBe(28); // February (non-leap year)
      expect(getDaysInMonth(2024, 4)).toBe(30); // April
      expect(getDaysInMonth(2024, 12)).toBe(31); // December
    });
  });

  describe('getAllDaysInMonthSafe', () => {
    it('should return array of all days in month', () => {
      const days = getAllDaysInMonthSafe(2024, 2);
      expect(days).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29,
      ]);
    });

    it('should handle non-leap year February correctly', () => {
      const days = getAllDaysInMonthSafe(2023, 2);
      expect(days).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28,
      ]);
    });
  });
});
