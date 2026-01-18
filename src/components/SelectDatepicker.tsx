import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { ISelectDatepicker } from '../interfaces/ISelectDatePicker';
import { classPrefix } from '../utils/helpers';
import {
  getCachedDaysObject,
  getCachedMonthsObject,
  getCachedYearsObject,
} from '../utils/performance';
import { createSmartDate, isValidDate } from '../utils/dateUtils';
import { isValidOrder, validateDateRange, isDateInRange, isDate } from '../utils/validation';
import { useKeyboardNavigation, useFocusManagement } from '../hooks/useKeyboardNavigation';
import { OptionsRenderer } from './OptionsRenderer';
import { SelectRenderer } from './SelectRenderer';
import './SelectDatepicker.css';

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

  const normalizedOrder = useMemo(
    () => (order && isValidOrder(order) ? order : 'month/day/year'),
    [order]
  );
  const orderArray = useMemo(() => normalizedOrder.split('/'), [normalizedOrder]);

  const generatedIdRef = useRef(`datepicker-${Math.random().toString(36).substr(2, 9)}`);
  const baseId = id || generatedIdRef.current;
  const selectIds = useMemo(() => {
    const ids: { [key: string]: string } = {};
    orderArray.forEach((key) => {
      ids[key] = `${classPrefix}_select-${key}-${baseId}`;
    });
    return ids;
  }, [orderArray, baseId]);

  const focusManagement = useFocusManagement(orderArray.map((key) => selectIds[key]));

  // Keyboard navigation for the date picker
  const { addKeyboardNavigation } = useKeyboardNavigation({
    onArrowKey: (direction) => {
      if (direction === 'right' || direction === 'down') {
        focusManagement.focusNext();
      } else if (direction === 'left' || direction === 'up') {
        focusManagement.focusPrevious();
      }
    },
    enabled: !disabled,
  });

  // Add keyboard navigation to all select elements
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // Add keyboard navigation to each select element
    orderArray.forEach((key) => {
      const element = document.getElementById(selectIds[key]);
      if (element) {
        const cleanup = addKeyboardNavigation(element);
        if (cleanup) {
          cleanupFunctions.push(cleanup);
        }
      }
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [orderArray, selectIds, addKeyboardNavigation]);
  const combinedClassNames = useMemo(
    () => [`${classPrefix}_react-select-datepicker`, className].join(' '),
    [className]
  );

  const safeMinDate = useMemo(() => (isDate(minDate) ? minDate : undefined), [minDate]);
  const safeMaxDate = useMemo(() => (isDate(maxDate) ? maxDate : undefined), [maxDate]);
  const isRangeValid = useMemo(
    () => validateDateRange(safeMinDate, safeMaxDate),
    [safeMinDate, safeMaxDate]
  );

  const effectiveMinDate = isRangeValid ? safeMinDate : undefined;
  const effectiveMaxDate = isRangeValid ? safeMaxDate : undefined;

  // Use cached versions for better performance
  const yearOptions = useMemo(
    () => (
      <OptionsRenderer options={getCachedYearsObject(effectiveMinDate, effectiveMaxDate, reverseYears)} />
    ),
    [effectiveMaxDate, effectiveMinDate, reverseYears]
  );
  const monthOptions = useMemo(
    () => (
      <OptionsRenderer
        options={getCachedMonthsObject(effectiveMinDate, effectiveMaxDate, year, labels.months)}
      />
    ),
    [effectiveMaxDate, effectiveMinDate, labels.months, year]
  );
  const dayOptions = useMemo(
    () => <OptionsRenderer options={getCachedDaysObject(effectiveMinDate, effectiveMaxDate, month, year)} />,
    [effectiveMaxDate, effectiveMinDate, month, year]
  );

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newYear = Number(e.target.value);
      setYear(newYear);

      // Smart month validation: use cached function and optimize check
      const mOptions = getCachedMonthsObject(
        effectiveMinDate,
        effectiveMaxDate,
        newYear,
        labels.months
      );
      const hasCurrentMonth = mOptions.some((val) => val.value === month);

      if (!hasCurrentMonth) {
        setMonth(-1);
      }
    },
    [month, effectiveMinDate, effectiveMaxDate, labels.months]
  );

  const handleMonthChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = Number(e.target.value);
    setMonth(newMonth);

    // Smart day validation handled by createSmartDate - no additional logic needed
  }, []);

  const handleDayChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(Number(e.target.value));
  }, []);

  const hasInvalidFields =
    (day === -1 && month !== -1 && year !== -1) ||
    (month === -1 && day !== -1 && year !== -1) ||
    (year === -1 && day !== -1 && month !== -1);

  const field: { day: JSX.Element; month: JSX.Element; year: JSX.Element } = useMemo(() => {
    return {
      day: (
        <SelectRenderer
          id={`day-${baseId}`}
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
          required={true}
          invalid={hasError}
        />
      ),
      month: (
        <SelectRenderer
          id={`month-${baseId}`}
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
          required={true}
          invalid={hasError}
        />
      ),
      year: (
        <SelectRenderer
          id={`year-${baseId}`}
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
          required={true}
          invalid={hasError}
        />
      ),
    };
  }, [
    baseId,
    day,
    dayOptions,
    dayRef,
    disabled,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    hideLabels,
    hasError,
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
    if (selectedDate !== undefined && selectedDate !== null && isDate(selectedDate) && isValidDate(selectedDate)) {
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
      const newDate = createSmartDate(year, month, day);
      if (isDateInRange(newDate, effectiveMinDate, effectiveMaxDate)) {
        onDateChange(newDate);
      } else {
        onDateChange(null);
      }
    } else {
      onDateChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year, onDateChange, effectiveMinDate, effectiveMaxDate]);

  // Memoize validation message to avoid recalculation
  const validationMessage = useMemo(() => {
    if (!hasError) return null;

    if (day === -1 && month === -1 && year === -1) {
      return 'Please select a date';
    }

    const missingFields = [];
    if (day === -1) missingFields.push(labels.dayLabel?.toLowerCase() || 'day');
    if (month === -1) missingFields.push(labels.monthLabel?.toLowerCase() || 'month');
    if (year === -1) missingFields.push(labels.yearLabel?.toLowerCase() || 'year');

    if (missingFields.length === 1) {
      return `Please select a ${missingFields[0]}`;
    } else if (missingFields.length === 2) {
      return `Please select a ${missingFields[0]} and ${missingFields[1]}`;
    } else {
      return 'Please select all date fields';
    }
  }, [hasError, day, month, year, labels.dayLabel, labels.monthLabel, labels.yearLabel]);

  return (
    <div
      {...args}
      className={combinedClassNames}
      id={id}
      role="group"
      aria-labelledby={id ? `${id}-legend` : undefined}
      aria-describedby={validationMessage ? `${id || baseId}-error` : undefined}
      aria-invalid={hasError}
    >
      {id && !hideLabels && (
        <div
          id={`${id}-legend`}
          className={`${classPrefix}_legend`}
        >
          {labels.yearLabel && labels.monthLabel && labels.dayLabel
            ? `Select ${labels.monthLabel}, ${labels.dayLabel}, and ${labels.yearLabel}`
            : 'Select date'}
        </div>
      )}

      <div className={`${classPrefix}_select-row`}>
        {orderArray.map((key, i) => {
          const fieldKey = key as 'day' | 'month' | 'year';
          return <React.Fragment key={`${key}-${i}`}>{field[fieldKey]}</React.Fragment>;
        })}
      </div>

      {validationMessage && (
        <div
          id={`${id || baseId}-error`}
          className={`${classPrefix}_error-message`}
          role="alert"
          aria-live="polite"
        >
          {validationMessage}
        </div>
      )}
    </div>
  );
};

export { SelectDatepicker };
