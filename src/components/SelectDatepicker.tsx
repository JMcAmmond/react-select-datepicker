import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ISelectDatepicker } from '../interfaces/ISelectDatePicker';
import { getDaysObject, getMonthsObject, getYearsObject } from '../utils/helpers';
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
  options = {},
  ...args
}: ISelectDatepicker) => {
  const [year, setYear] = useState(-1);
  const [month, setMonth] = useState(-1);
  const [day, setDay] = useState(-1);

  const orderArray = useMemo(
    () => (options.order ? options.order.split('/') : ['month', 'day', 'year']),
    [options.order]
  );
  const combinedClassNames = useMemo(
    () => ['sdp-select-datepicker', className].join(' '),
    [className]
  );

  const yearOptions = useMemo(
    () => <OptionsRenderer options={getYearsObject(minDate, maxDate, options.reverseYears)} />,
    [maxDate, options.reverseYears, minDate]
  );
  const monthOptions = useMemo(
    () => (
      <OptionsRenderer options={getMonthsObject(minDate, maxDate, year, options.labels?.months)} />
    ),
    [maxDate, options.labels?.months, minDate, year]
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
            show: options.showLabels === undefined ? true : options.showLabels,
            main: options.labels?.dayLabel || 'Day',
            placeholder: options.labels?.dayPlaceholder || 'Select Day',
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
            show: options.showLabels === undefined ? true : options.showLabels,
            main: options.labels?.monthLabel || 'Month',
            placeholder: options.labels?.monthPlaceholder || 'Select Month',
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
            show: options.showLabels === undefined ? true : options.showLabels,
            main: options.labels?.yearLabel || 'Year',
            placeholder: options.labels?.yearPlaceholder || 'Select Year',
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
    month,
    monthOptions,
    monthRef,
    options.labels?.dayLabel,
    options.labels?.dayPlaceholder,
    options.labels?.monthLabel,
    options.labels?.monthPlaceholder,
    options.labels?.yearLabel,
    options.labels?.yearPlaceholder,
    options.showLabels,
    year,
    yearOptions,
    yearRef,
  ]);

  useEffect(() => {
    if (selectedDate !== undefined && selectedDate !== null) {
      setDay(Number(selectedDate.getDate()));
      setMonth(Number(selectedDate.getMonth() + 1));
      setYear(Number(selectedDate.getFullYear()));
    }
  }, [selectedDate]);

  useEffect(() => {
    if (year !== -1 && month !== -1 && day !== -1) {
      onDateChange(new Date(`${month}/${day}/${year}`));
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
