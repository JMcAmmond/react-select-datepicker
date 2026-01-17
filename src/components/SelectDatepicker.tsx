import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ISelectDatepicker } from '../interfaces/ISelectDatePicker';
import { classPrefix, getDaysObject, getMonthsObject, getYearsObject } from '../utils/helpers';
import { createSafeDate, isValidDate } from '../utils/dateUtils';
import { OptionsRenderer } from './OptionsRenderer';
import { SelectRenderer } from './SelectRenderer';

const SelectDatepicker = ({
  id,
  className,
  minDate,
  maxDate,
  selectedDate,
  onDateChange,
  disabled = false,
  hasError = false,
  monthRef,
  yearRef,
  dayRef,
  labels = {},
  order = 'month/day/year',
  reverseYears,
  hideLabels,
  ...args
}: ISelectDatepicker) => {
  const [year, setYear] = useState(-1);
  const [month, setMonth] = useState(-1);
  const [day, setDay] = useState(-1);

  const orderArray = useMemo(() => (order ? order.split('/') : ['month', 'day', 'year']), [order]);
  const combinedClassNames = useMemo(
    () => [`${classPrefix}_react-select-datepicker`, className].join(' '),
    [className]
  );

  const yearOptions = useMemo(
    () => <OptionsRenderer options={getYearsObject(minDate, maxDate, reverseYears)} />,
    [maxDate, reverseYears, minDate]
  );
  const monthOptions = useMemo(
    () => <OptionsRenderer options={getMonthsObject(minDate, maxDate, year, labels.months)} />,
    [maxDate, labels.months, minDate, year]
  );
  const dayOptions = useMemo(
    () => <OptionsRenderer options={getDaysObject(minDate, maxDate, month, year)} />,
    [maxDate, month, minDate, year]
  );

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setYear(Number(e.target.value));

      //Validate if current month is in new month options
      const mOptions = getMonthsObject(minDate, maxDate, Number(e.target.value));
      if (!mOptions.some((val) => val.value === month)) {
        setMonth(-1);
      }

      //Validate if current day is in new day options
      const dOptions = getDaysObject(minDate, maxDate, month, Number(e.target.value));
      if (!dOptions.some((val) => val.value === day)) {
        setDay(-1);
      }
    },
    [day, month, minDate, maxDate]
  );

  const handleMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMonth(Number(e.target.value));

      //Validate if current day is in new day options
      const dOptions = getDaysObject(minDate, maxDate, Number(e.target.value), year);
      if (!dOptions.some((val) => val.value === day)) {
        setDay(-1);
      }
    },
    [day, year, minDate, maxDate]
  );

  const handleDayChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(Number(e.target.value));
  }, []);

  const field: { day: JSX.Element; month: JSX.Element; year: JSX.Element } = useMemo(() => {
    return {
      day: (
        <SelectRenderer
          id="day"
          labels={{
            hide: hideLabels,
            main: labels.dayLabel || 'Day',
            placeholder: labels.dayPlaceholder || 'Select Day',
          }}
          value={day}
          disabled={disabled}
          onChangeHandler={handleDayChange}
          selectOptions={dayOptions}
          ref={dayRef}
        />
      ),
      month: (
        <SelectRenderer
          id="month"
          labels={{
            hide: hideLabels,
            main: labels.monthLabel || 'Month',
            placeholder: labels.monthPlaceholder || 'Select Month',
          }}
          value={month}
          disabled={disabled}
          onChangeHandler={handleMonthChange}
          selectOptions={monthOptions}
          ref={monthRef}
        />
      ),
      year: (
        <SelectRenderer
          id="year"
          labels={{
            hide: hideLabels,
            main: labels.yearLabel || 'Year',
            placeholder: labels.yearPlaceholder || 'Select Year',
          }}
          value={year}
          disabled={disabled}
          onChangeHandler={handleYearChange}
          selectOptions={yearOptions}
          ref={yearRef}
        />
      ),
    };
  }, [
    day,
    dayOptions,
    dayRef,
    disabled,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    hideLabels,
    labels.dayLabel,
    labels.dayPlaceholder,
    labels.monthLabel,
    labels.monthPlaceholder,
    labels.yearLabel,
    labels.yearPlaceholder,
    month,
    monthOptions,
    monthRef,
    year,
    yearOptions,
    yearRef,
  ]);

  useEffect(() => {
    if (selectedDate !== undefined && selectedDate !== null && isValidDate(selectedDate)) {
      setDay(Number(selectedDate.getDate()));
      setMonth(Number(selectedDate.getMonth() + 1));
      setYear(Number(selectedDate.getFullYear()));
    } else {
      // Reset to invalid state if selectedDate is invalid
      setDay(-1);
      setMonth(-1);
      setYear(-1);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (year !== -1 && month !== -1 && day !== -1) {
      const newDate = createSafeDate(year, month, day);
      onDateChange(newDate);
    } else {
      onDateChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  return (
    <div
      {...args}
      style={{ display: 'flex' }}
      id={id}
      className={combinedClassNames}
      {...(hasError ? { 'aria-invalid': true } : null)}
    >
      {orderArray.map((key, i) => {
        return (
          <React.Fragment key={`${key}-${i}`}>
            {field[key as 'day' | 'month' | 'year']}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { SelectDatepicker };
