/* eslint-disable react/no-array-index-key */
import React, {
  useState,
  useCallback,
  ChangeEvent,
  useMemo,
  useEffect,
} from 'react';
import { isValidDate, buildDateFromInput } from './dateValidation';
import { getDays, getMonths, getYears } from './dateMap';
import { IDate, ISelectDatePicker } from './interfaces';
import { spreadDateToObject } from './helpers';
import { flexRow, flexColumn } from './styles';

const SelectDatepicker: React.FC<ISelectDatePicker> = (props) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [date, setDate] = useState<IDate>(spreadDateToObject(props.value));

  const orderArray = useMemo(() => props.format!.split('/'), [props.format]);

  /**
   * Call onDateChange prop with the provided date object
   */
  const onDateChange = useCallback(
    (newDate) => {
      props.onDateChange(newDate);
    },
    [props],
  );

  /**
   * Build a Date object and call the onDateChange function
   */
  const validDateChange = useCallback(() => {
    const newDate = buildDateFromInput(date.day, date.month, date.year);
    onDateChange(newDate);
  }, [date.day, date.month, date.year, onDateChange]);

  /**
   * Sets the error state and calls the onDateChange function with a null value
   */
  const renderError = useCallback(
    (err, hasErr) => {
      setError(err);
      setHasError(hasErr);
      onDateChange(null);
    },
    [onDateChange],
  );

  /**
   * Validates if a the inputs form a valid date
   * Returns null if values are not set
   * Returns null and errors if date is not valid
   * Returns a valid date object when everything passes
   */
  const validate = useCallback(() => {
    const { day, month, year } = date;

    // Must contain values
    if (!day || !month || !year) {
      onDateChange(null);
      return;
    }

    // Validate date input
    const errorString = isValidDate(day, month, year, props);
    if (errorString !== '') {
      renderError(errorString, true);
      return;
    }

    validDateChange();
  }, [date, onDateChange, props, renderError, validDateChange]);

  /**
   * Sets the date state when an input value changes
   */
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setDate({ ...date, [e.target.name]: e.target.value });
    },
    [date],
  );

  /**
   * Create an input field with a form label
   */
  const inputField = useCallback(
    (id, label, value, options) => {
      const className = `rid_${id}-container`;

      return (
        <div className={`${className}`} style={flexColumn}>
          {props.showLabels ? <label htmlFor={id}>{label}</label> : null}
          <select
            className={`${hasError ? 'has-error' : ''}`}
            id={id}
            name={id}
            value={value}
            onChange={onInputChange}>
            {options.map((option: string, i: number) => {
              return (
                <React.Fragment key={`${option}-${i}`}>{option}</React.Fragment>
              );
            })}
          </select>
        </div>
      );
    },
    [hasError, onInputChange, props.showLabels],
  );

  /**
   * Creates an object with all input field elements
   */
  const dateField = useMemo(() => {
    const { showPlaceholders, monthNames, maxDate, minDate, labels } = props;

    const dayLabel = (labels && labels.day) || 'Day';
    const monthLabel = (labels && labels.month) || 'Month';
    const yearLabel = (labels && labels.year) || 'Year';

    const fields = {
      day: inputField(
        'day',
        dayLabel,
        date.day,
        getDays(showPlaceholders!, dayLabel),
      ),
      month: inputField(
        'month',
        monthLabel,
        date.month,
        getMonths(showPlaceholders!, monthLabel, monthNames),
      ),
      year: inputField(
        'year',
        yearLabel,
        date.year,
        getYears(maxDate, minDate, showPlaceholders!, date.year, yearLabel),
      ),
    };

    return fields;
  }, [date.day, date.month, date.year, inputField, props]);

  /**
   * When ever the date state changes then clear errors and validate the date
   */
  useEffect(() => {
    setError('');
    setHasError(false);
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className={`rid ${props.className}`}>
      <div className="rid_date-container" style={flexRow}>
        {orderArray.map((key, i) => {
          return (
            <React.Fragment key={`${key}-${i}`}>
              {dateField[key]}
            </React.Fragment>
          );
        })}
      </div>
      {props.showErrors && hasError && (
        <div className="error-message">{error}</div>
      )}
    </div>
  );
};

export default SelectDatepicker;

SelectDatepicker.defaultProps = {
  value: null,
  showLabels: true,
  showPlaceholders: true,
  showErrors: true,
  format: 'month/day/year',
  className: '',
};
