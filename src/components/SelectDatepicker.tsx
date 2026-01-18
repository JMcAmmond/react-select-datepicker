import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { ISelectDatepicker } from '../interfaces/ISelectDatePicker';
import { classPrefix } from '../utils/helpers';
import {
  getCachedDaysObject,
  getCachedMonthsObject,
  getCachedYearsObject,
} from '../utils/performance';
import { createSmartDate, isValidDate, normalizeToLocalMidnight } from '../utils/dateUtils';
import { isValidOrder, validateDateRange, isDateInRange, isDate } from '../utils/validation';
import { useKeyboardNavigation, useFocusManagement } from '../hooks/useKeyboardNavigation';
import { OptionsRenderer } from './OptionsRenderer';
import { SelectDatepickerContext } from './SelectDatepickerContext';
import { SelectDatepickerField } from './SelectDatepickerField';
import './SelectDatepicker.css';

const SelectDatepicker = ({
  id,
  className,
  minDate,
  maxDate,
  selectedDate,
  onDateChange,
  value,
  onChange,
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

  const resolvedSelectedDate = useMemo(
    () => (value !== undefined ? value : selectedDate),
    [value, selectedDate]
  );
  const resolvedOnChange = useMemo(() => onChange ?? onDateChange, [onChange, onDateChange]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    if (order && !isValidOrder(order)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[SelectDatepicker] Invalid order "${order}". Falling back to "month/day/year".`
      );
    }

    if (onChange && onDateChange) {
      // eslint-disable-next-line no-console
      console.warn(
        '[SelectDatepicker] Both onChange and onDateChange provided. onChange will be used.'
      );
    }

    if (value !== undefined && selectedDate !== undefined) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] Both value and selectedDate provided. value will be used.');
    }

    if (!resolvedOnChange) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] Missing onChange/onDateChange handler.');
    }

    if (minDate && !isDate(minDate)) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] minDate is not a valid Date instance.');
    }

    if (maxDate && !isDate(maxDate)) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] maxDate is not a valid Date instance.');
    }

    if (
      minDate &&
      maxDate &&
      isDate(minDate) &&
      isDate(maxDate) &&
      !validateDateRange(minDate, maxDate)
    ) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] minDate is after maxDate. Range constraints ignored.');
    }

    if (selectedDate !== undefined && selectedDate !== null && !isDate(selectedDate)) {
      // eslint-disable-next-line no-console
      console.warn('[SelectDatepicker] selectedDate is not a valid Date instance.');
    }

    if (labels?.months) {
      const monthsMap = labels.months as Record<number, string>;
      const missingMonths = Array.from({ length: 12 }, (_, i) => i + 1).filter(
        (monthKey) => monthsMap[monthKey] === undefined
      );
      if (missingMonths.length > 0) {
        const missingMonthLabels = missingMonths.join(', ');
        // eslint-disable-next-line no-console
        console.warn(
          `[SelectDatepicker] labels.months is missing entries for months: ${missingMonthLabels}.`
        );
      }
    }
  }, [
    order,
    minDate,
    maxDate,
    selectedDate,
    labels,
    onChange,
    onDateChange,
    value,
    resolvedOnChange,
  ]);

  const safeMinDate = useMemo(
    () => (isDate(minDate) ? normalizeToLocalMidnight(minDate) : undefined),
    [minDate]
  );
  const safeMaxDate = useMemo(
    () => (isDate(maxDate) ? normalizeToLocalMidnight(maxDate) : undefined),
    [maxDate]
  );
  const isRangeValid = useMemo(
    () => validateDateRange(safeMinDate, safeMaxDate),
    [safeMinDate, safeMaxDate]
  );

  const effectiveMinDate = isRangeValid ? safeMinDate : undefined;
  const effectiveMaxDate = isRangeValid ? safeMaxDate : undefined;

  // Use cached versions for better performance
  const yearOptions = useMemo(
    () => (
      <OptionsRenderer
        options={getCachedYearsObject(effectiveMinDate, effectiveMaxDate, reverseYears)}
      />
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
    () => (
      <OptionsRenderer
        options={getCachedDaysObject(effectiveMinDate, effectiveMaxDate, month, year)}
      />
    ),
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

  const contextValue = useMemo(
    () => ({
      baseId,
      labels,
      hideLabels,
      disabled,
      hasError,
      day,
      month,
      year,
      dayOptions,
      monthOptions,
      yearOptions,
      dayRef,
      monthRef,
      yearRef,
      onDayChange: handleDayChange,
      onMonthChange: handleMonthChange,
      onYearChange: handleYearChange,
    }),
    [
      baseId,
      labels,
      hideLabels,
      disabled,
      hasError,
      day,
      month,
      year,
      dayOptions,
      monthOptions,
      yearOptions,
      dayRef,
      monthRef,
      yearRef,
      handleDayChange,
      handleMonthChange,
      handleYearChange,
    ]
  );

  useEffect(() => {
    if (
      resolvedSelectedDate !== undefined &&
      resolvedSelectedDate !== null &&
      isDate(resolvedSelectedDate) &&
      isValidDate(resolvedSelectedDate)
    ) {
      setDay(Number(resolvedSelectedDate.getDate()));
      setMonth(Number(resolvedSelectedDate.getMonth() + 1));
      setYear(Number(resolvedSelectedDate.getFullYear()));
    } else {
      // Reset to invalid state if selectedDate is invalid
      setDay(-1);
      setMonth(-1);
      setYear(-1);
    }
  }, [resolvedSelectedDate]);

  useEffect(() => {
    if (year !== -1 && month !== -1 && day !== -1) {
      const newDate = createSmartDate(year, month, day);
      if (isDateInRange(newDate, effectiveMinDate, effectiveMaxDate)) {
        resolvedOnChange?.(newDate);
      } else {
        resolvedOnChange?.(null);
      }
    } else {
      resolvedOnChange?.(null);
    }
  }, [day, month, year, resolvedOnChange, effectiveMinDate, effectiveMaxDate]);

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
        <div id={`${id}-legend`} className={`${classPrefix}_legend`}>
          {labels.yearLabel && labels.monthLabel && labels.dayLabel
            ? `Select ${labels.monthLabel}, ${labels.dayLabel}, and ${labels.yearLabel}`
            : 'Select date'}
        </div>
      )}

      <SelectDatepickerContext.Provider value={contextValue}>
        <div className={`${classPrefix}_select-row`}>
          {orderArray.map((key, i) => {
            const fieldKey = key as 'day' | 'month' | 'year';
            return (
              <React.Fragment key={`${key}-${i}`}>
                <SelectDatepickerField fieldKey={fieldKey} />
              </React.Fragment>
            );
          })}
        </div>
      </SelectDatepickerContext.Provider>

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
