import { IDate } from './interfaces';

/**
 * Parse date object into day, month, year state
 */
export const spreadDateToObject = (dateValue: Date | null): IDate => {
  return {
    day: dateValue ? `${dateValue.getDate()}` : '',
    month: dateValue ? `${dateValue.getMonth() + 1}` : '',
    year: dateValue ? `${dateValue.getFullYear()}` : '',
  };
};
