import React from 'react';

const MONTHMAP = {
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
};

const getDays = (showLabel: boolean, dayLabel: string) => {
  const days = [];

  days.push(
    <option value="" disabled>
      {showLabel ? dayLabel || 'Day' : ''}
    </option>,
  );

  for (let i = 1; i <= 31; i += 1) {
    days.push(<option value={`${i}`}>{i}</option>);
  }

  return days;
};

const getMonths = (
  showLabel: boolean,
  monthLabel: string,
  monthNames: Array<string> | undefined,
) => {
  const months = [];

  months.push(
    <option value="" disabled>
      {showLabel ? monthLabel || 'Month' : ''}
    </option>,
  );

  for (let i = 1; i <= 12; i += 1) {
    months.push(
      <option value={`${i}`}>
        {monthNames ? monthNames[i - 1] : MONTHMAP[i]}
      </option>,
    );
  }

  return months;
};

const getYears = (
  max: Date | undefined,
  min: Date | undefined,
  showLabel: boolean | undefined,
  value: string,
  yearLabel: string,
) => {
  const years = [];
  let maxYear;
  let minYear;

  if (max !== undefined) {
    maxYear = max.getFullYear();
  } else {
    maxYear = new Date().getFullYear();
  }

  if (min !== undefined) {
    minYear = min.getFullYear();
  } else {
    minYear = 1900;
  }

  if (value) {
    if (Number(value) > maxYear) {
      maxYear = Number(value);
    }

    if (Number(value) < minYear) {
      minYear = Number(value);
    }
  }

  years.push(
    <option value="" disabled>
      {showLabel ? yearLabel || 'Year' : ''}
    </option>,
  );

  for (let i = maxYear; i >= minYear; i -= 1) {
    years.push(<option value={`${i}`}>{i}</option>);
  }

  return years;
};

export { getDays, getMonths, getYears };
