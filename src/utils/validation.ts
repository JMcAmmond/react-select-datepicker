import { SelectDatepickerOrder } from '../types/SelectDatepickerOrder';

export const VALID_ORDERS = [
  'day/month/year',
  'day/year/month',
  'month/day/year',
  'month/year/day',
  'year/month/day',
  'year/day/month',
] as const;

/**
 * Validates if a string is a valid SelectDatepickerOrder
 */
export function isValidOrder(order: string): order is SelectDatepickerOrder {
  return VALID_ORDERS.includes(order as SelectDatepickerOrder);
}

/**
 * Validates date range to ensure minDate is before maxDate
 */
export function validateDateRange(minDate?: Date, maxDate?: Date): boolean {
  if (!minDate || !maxDate) return true;
  return minDate <= maxDate;
}

/**
 * Validates if a date is within the allowed range
 */
export function isDateInRange(date: Date, minDate?: Date, maxDate?: Date): boolean {
  if (minDate && date < minDate) return false;
  if (maxDate && date > maxDate) return false;
  return true;
}

/**
 * Type guard to check if value is a Date object
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}
