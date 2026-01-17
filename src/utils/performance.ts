/**
 * Performance optimization utilities for react-select-datepicker
 */

// Simple LRU cache for expensive calculations
class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private maxSize: number;

  constructor(maxSize = 50) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Move to end (most recently used)
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Remove least recently used (first item)
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }
}

// Create caches for expensive calculations
const yearsCache = new LRUCache<string, { value: number; label: string }[]>();
const monthsCache = new LRUCache<string, { value: number; label: string }[]>();
const daysCache = new LRUCache<string, { value: number; label: string }[]>();

/**
 * Creates a cache key from multiple parameters
 */
export const createCacheKey = (...args: (string | number | boolean | undefined)[]): string => {
  return args.map((arg) => String(arg || 'undefined')).join('|');
};

/**
 * Range generator with better performance than Array.from
 */
export const createRange = (start: number, stop: number, step: number): number[] => {
  const length = Math.floor((stop - start) / step) + 1;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = start + i * step;
  }
  return result;
};

/**
 * Cached years object generator
 */
export const getCachedYearsObject = (
  start?: Date,
  end?: Date,
  reverse?: boolean
): { value: number; label: string }[] => {
  const cacheKey = createCacheKey(
    start?.getFullYear() || 'undefined',
    end?.getFullYear() || new Date().getFullYear(),
    reverse || false
  );

  let result = yearsCache.get(cacheKey);
  if (result) return result;

  const endYear = end ? end.getFullYear() : new Date().getFullYear();
  const startYear = start ? start.getFullYear() : 1900;
  let arr = createRange(endYear, startYear, -1);

  if (reverse) {
    arr = arr.reverse();
  }

  // Map to options objects more efficiently
  result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = { value: arr[i], label: `${arr[i]}` };
  }

  yearsCache.set(cacheKey, result);
  return result;
};

/**
 * Cached months object generator
 */
export const getCachedMonthsObject = (
  start?: Date,
  end?: Date,
  selectedYear = -1,
  months: { [key: string]: string } = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }
): { value: number; label: string }[] => {
  const cacheKey = createCacheKey(
    start?.getFullYear() || 'undefined',
    end?.getFullYear() || 'undefined',
    selectedYear,
    Object.keys(months).length
  );

  let result = monthsCache.get(cacheKey);
  if (result) return result;

  let arr = createRange(1, 12, 1);

  if (end && selectedYear !== -1 && selectedYear === end.getFullYear()) {
    const endMonth = end.getMonth() + 1;
    arr = arr.slice(0, endMonth);
  }

  if (start && selectedYear !== -1 && selectedYear === start.getFullYear()) {
    const startMonth = start.getMonth() + 1;
    arr = arr.slice(startMonth - 1, arr.length);
  }

  // Map to options objects more efficiently
  result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const monthNum = arr[i];
    result[i] = { value: monthNum, label: months[monthNum] || `Month ${monthNum}` };
  }

  monthsCache.set(cacheKey, result);
  return result;
};

/**
 * Cached days object generator
 */
export const getCachedDaysObject = (
  start?: Date,
  end?: Date,
  selectedMonth = -1,
  selectedYear = -1
): { value: number; label: string }[] => {
  const cacheKey = createCacheKey(
    start?.getFullYear() || 'undefined',
    start?.getMonth() || 'undefined',
    end?.getFullYear() || 'undefined',
    end?.getMonth() || 'undefined',
    selectedMonth,
    selectedYear
  );

  let result = daysCache.get(cacheKey);
  if (result) return result;

  let arr: number[] = [];

  // Return 31 days if no month was selected
  if (selectedMonth === -1) {
    arr = createRange(1, 31, 1);
  } else {
    // Use the efficient getDaysInMonth function
    const year = selectedYear === -1 ? 1900 : selectedYear;
    const daysInMonth = new Date(year, selectedMonth, 0).getDate();
    arr = createRange(1, daysInMonth, 1);
  }

  // Apply end date constraints
  if (end && selectedYear === end.getFullYear() && selectedMonth === end.getMonth() + 1) {
    const endDay = end.getDate();
    arr = arr.slice(0, endDay);
  }

  // Apply start date constraints
  if (start && selectedYear === start.getFullYear() && selectedMonth === start.getMonth() + 1) {
    const startDay = start.getDate();
    arr = arr.slice(startDay - 1, arr.length);
  }

  // Map to options objects more efficiently
  result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = { value: arr[i], label: `${arr[i]}` };
  }

  daysCache.set(cacheKey, result);
  return result;
};

/**
 * Clear all caches (useful for testing or memory management)
 */
export const clearAllCaches = (): void => {
  yearsCache.clear();
  monthsCache.clear();
  daysCache.clear();
};
