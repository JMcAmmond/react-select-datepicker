/**
 * Build a date from input
 * @param {string} day
 * @param {string} month
 * @param {string} year
 */
const buildDateFromInput = (day: string, month: string, year: string) => {
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date;
};

/**
 * Check if the date value is a valid Date object and that it matches the values it was created from
 * @param date Date
 * @param day string
 * @param month string
 * @param year string
 */
const isValidDateObject = (
  date: Date,
  day: string,
  month: string,
  year: string,
) => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]';
  const dayMatch = date.getDate() === Number(day);
  const monthMatch = date.getMonth() === Number(month) - 1;
  const yearMatch = date.getFullYear() === Number(year);

  return isDate && dayMatch && monthMatch && yearMatch;
};

/**
 * Determine if provided date is a valid date and falls between date range
 * @param {string} day
 * @param {string} month
 * @param {string} year
 * @param {object} props
 */
const isValidDate = (day: string, month: string, year: string, props: any) => {
  const userDate = buildDateFromInput(day, month, year);

  // Must be a valid date
  if (!isValidDateObject(userDate, day, month, year)) {
    return props.invalidMessage || 'Not a valid date';
  }

  // Must be same or before max date
  if (props.maxDate) {
    const { maxDate } = props;
    if (userDate > maxDate) {
      const maxDatePlusOne = new Date(maxDate);
      maxDatePlusOne.setDate(maxDatePlusOne.getDate() + 1);

      return (
        props.maxDateMessage ||
        `Date must be less than ${maxDatePlusOne.toDateString().substring(3)}`
      );
    }
  }

  // Must be same or after min date
  if (props.minDate) {
    const { minDate } = props;
    if (userDate < minDate) {
      const minDateMinusOne = new Date(minDate);
      minDateMinusOne.setDate(minDateMinusOne.getDate() - 1);

      return (
        props.minDateMessage ||
        `Date must be greater than ${minDateMinusOne
          .toDateString()
          .substring(3)}`
      );
    }
  }

  return '';
};

export { isValidDate, buildDateFromInput };
