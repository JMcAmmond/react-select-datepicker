import { createSafeDate, isValidDateCombination, getDaysInMonth } from '../dateUtils';

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
});
