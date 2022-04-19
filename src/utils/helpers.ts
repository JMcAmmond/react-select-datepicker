import { Months } from '../types/SelectDatepickerLabels';

export const classPrefix = 'rsd_';

export const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const getAllDaysInMonth = (year: number, month: number) => {
  const date = new Date(`${year}/${month}/01`);
  const dates = [];

  while (date.getMonth() + 1 === month) {
    dates.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const englishMonths: Months = {
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

export const getYearsObject = (start?: Date, end?: Date, reverse?: boolean) => {
  let arr = range(
    end ? end.getFullYear() : new Date().getFullYear(),
    start ? start.getFullYear() : 1900,
    -1
  );
  if (reverse) {
    arr = arr.reverse();
  }

  return arr.map((item, _) => {
    return { value: item, label: `${item}` };
  });
};

export const getMonthsObject = (
  start?: Date,
  end?: Date,
  selectedYear = -1,
  months: { [key: string]: string } = englishMonths
) => {
  let arr = range(1, 12, 1);
  if (end && selectedYear !== -1 && selectedYear === end.getFullYear()) {
    const endMonth = end.getMonth() + 1;
    arr = arr.slice(0, endMonth);
  }

  if (start && selectedYear !== -1 && selectedYear === start.getFullYear()) {
    const startMonth = start.getMonth() + 1;
    arr = arr.slice(startMonth - 1, arr.length);
  }

  return arr.map((item, _) => {
    return { value: item, label: months[item] };
  });
};

export const getDaysObject = (start?: Date, end?: Date, selectedMonth = -1, selectedYear = -1) => {
  let arr: number[] = [];

  //Return 31 days if no month was selected
  if (selectedMonth === -1) {
    arr = range(1, 31, 1);
    return arr.map((item, _) => {
      return { value: item, label: `${item}` };
    });
  }

  //If no year was selected the pretend its 1900
  if (selectedYear === -1) {
    arr = getAllDaysInMonth(1900, selectedMonth);
  } else {
    arr = getAllDaysInMonth(selectedYear, selectedMonth);
  }

  //Splice days if have an end date and you are in the correct month and year
  if (end && selectedYear === end.getFullYear() && selectedMonth === end.getMonth() + 1) {
    const endDay = end.getDate();
    arr = arr.slice(0, endDay);
  }

  //Splice days if have an start date and you are in the correct month and year
  if (start && selectedYear === start.getFullYear() && selectedMonth === start.getMonth() + 1) {
    const startDay = start.getDate();
    arr = arr.slice(startDay - 1, arr.length);
  }

  return arr.map((item, _) => {
    return { value: item, label: `${item}` };
  });
};
