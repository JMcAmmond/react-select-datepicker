import React, { useContext } from 'react';
import { SelectRenderer } from './SelectRenderer';
import { DatepickerFieldKey, SelectDatepickerContext } from './SelectDatepickerContext';

interface SelectDatepickerFieldProps {
  fieldKey: DatepickerFieldKey;
}

export const SelectDatepickerField = ({ fieldKey }: SelectDatepickerFieldProps) => {
  const context = useContext(SelectDatepickerContext);

  if (!context) {
    throw new Error('SelectDatepickerField must be used within SelectDatepickerContext');
  }

  const {
    baseId,
    labels,
    hideLabels,
    disabled,
    isInvalid,
    day,
    month,
    year,
    dayOptions,
    monthOptions,
    yearOptions,
    dayRef,
    monthRef,
    yearRef,
    isRequired,
    onDayChange,
    onMonthChange,
    onYearChange,
  } = context;

  const config = {
    day: {
      id: `day-${baseId}`,
      value: day,
      labels: {
        hide: hideLabels,
        main: labels.dayLabel || 'Day',
        placeholder: labels.dayPlaceholder || 'Select Day',
      },
      options: dayOptions,
      onChangeHandler: onDayChange,
      ref: dayRef,
    },
    month: {
      id: `month-${baseId}`,
      value: month,
      labels: {
        hide: hideLabels,
        main: labels.monthLabel || 'Month',
        placeholder: labels.monthPlaceholder || 'Select Month',
      },
      options: monthOptions,
      onChangeHandler: onMonthChange,
      ref: monthRef,
    },
    year: {
      id: `year-${baseId}`,
      value: year,
      labels: {
        hide: hideLabels,
        main: labels.yearLabel || 'Year',
        placeholder: labels.yearPlaceholder || 'Select Year',
      },
      options: yearOptions,
      onChangeHandler: onYearChange,
      ref: yearRef,
    },
  } as const;

  const field = config[fieldKey];

  return (
    <SelectRenderer
      id={field.id}
      labels={field.labels}
      value={field.value}
      disabled={disabled}
      onChangeHandler={field.onChangeHandler}
      selectOptions={field.options}
      ref={field.ref}
      required={isRequired}
      invalid={isInvalid}
    />
  );
};
