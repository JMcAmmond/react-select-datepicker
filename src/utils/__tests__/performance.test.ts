import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getCachedYearsObject,
  getCachedMonthsObject,
  getCachedDaysObject,
  clearAllCaches,
} from '../performance';
import { isValidOrder, validateDateRange, isDateInRange } from '../validation';

describe('Performance Utils', () => {
  beforeEach(() => {
    clearAllCaches();
  });

  describe('getCachedYearsObject', () => {
    it('should cache year objects', () => {
      const result1 = getCachedYearsObject();
      const result2 = getCachedYearsObject();
      expect(result1).toBe(result2); // Should hit cache
    });

    it('should generate correct year options', () => {
      const result = getCachedYearsObject(new Date(2020, 0, 1), new Date(2025, 11, 31));
      expect(result).toHaveLength(6); // 2020-2025
      expect(result[0].value).toBe(2025);
      expect(result[5].value).toBe(2020);
    });
  });

  describe('getCachedMonthsObject', () => {
    it('should cache month objects', () => {
      const result1 = getCachedMonthsObject(undefined, undefined, 2024);
      const result2 = getCachedMonthsObject(undefined, undefined, 2024);
      expect(result1).toBe(result2); // Should hit cache
    });

    it('should generate correct month options', () => {
      const result = getCachedMonthsObject(undefined, undefined, 2024);
      expect(result).toHaveLength(12); // 12 months - correct! Function works as designed
      expect(result[0].value).toBe(1); // January
      expect(result[11].value).toBe(12); // December
    });
  });

  describe('getCachedDaysObject', () => {
    it('should cache day objects', () => {
      const result1 = getCachedDaysObject(undefined, undefined, 2, 2024);
      const result2 = getCachedDaysObject(undefined, undefined, 2, 2024);
      expect(result1).toBe(result2); // Should hit cache
    });

    it('should generate correct day options', () => {
      const result = getCachedDaysObject(undefined, undefined, 2, 2024); // February in leap year
      expect(result).toHaveLength(29); // 29 days - correct! Function works as designed
      expect(result[0].value).toBe(1);
      expect(result[28].value).toBe(29);
    });
  });
});

describe('Validation Utils', () => {
  describe('isValidOrder', () => {
    it('should return true for valid orders', () => {
      expect(isValidOrder('month/day/year')).toBe(true);
      expect(isValidOrder('day/month/year')).toBe(true);
      expect(isValidOrder('year/month/day')).toBe(true);
    });

    it('should return false for invalid orders', () => {
      expect(isValidOrder('invalid/order')).toBe(false);
      expect(isValidOrder('day-month-year')).toBe(false);
      expect(isValidOrder('')).toBe(false);
    });
  });

  describe('validateDateRange', () => {
    it('should return true for valid date range', () => {
      const minDate = new Date('2024-01-01');
      const maxDate = new Date('2024-12-31');
      expect(validateDateRange(minDate, maxDate)).toBe(true);
    });

    it('should return false for invalid date range', () => {
      const minDate = new Date('2024-12-31');
      const maxDate = new Date('2024-01-01');
      expect(validateDateRange(minDate, maxDate)).toBe(false);
    });
  });

  describe('isDateInRange', () => {
    it('should return true for date within range', () => {
      const testDate = new Date('2024-06-15');
      const minDate = new Date('2024-01-01');
      const maxDate = new Date('2024-12-31');
      expect(isDateInRange(testDate, minDate, maxDate)).toBe(true);
    });

    it('should return false for date before min date', () => {
      const testDate = new Date('2023-12-31');
      const minDate = new Date('2024-01-01');
      const maxDate = new Date('2024-12-31');
      expect(isDateInRange(testDate, minDate, maxDate)).toBe(false);
    });

    it('should return false for date after max date', () => {
      const testDate = new Date('2025-01-01');
      const minDate = new Date('2024-01-01');
      const maxDate = new Date('2024-12-31');
      expect(isDateInRange(testDate, minDate, maxDate)).toBe(false);
    });
  });
});
