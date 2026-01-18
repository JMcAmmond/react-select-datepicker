import React from 'react';
import { classPrefix } from '../utils/helpers';
import './SelectRenderer.css';

interface ISelectRenderer {
  id: string;
  labels: {
    hide?: boolean;
    main?: string;
    placeholder?: string;
  };
  value: number;
  disabled?: boolean;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions: JSX.Element;
  ref?: React.LegacyRef<HTMLSelectElement>;
  required?: boolean;
  invalid?: boolean;
}

export const SelectRenderer = ({
  id,
  labels,
  value,
  disabled,
  onChangeHandler,
  selectOptions,
  ref,
  required = false,
  invalid = false,
}: ISelectRenderer) => {
  const selectId = `${classPrefix}_select-${id}`;
  const labelId = `${classPrefix}_label-${id}`;

  return (
    <div
      className={`${classPrefix}_select-container ${classPrefix}_select-container-${id}`}
    >
      {!labels.hide && (
        <label id={labelId} htmlFor={selectId} className={`${classPrefix}_label-${id}`}>
          {labels.main}
          {required && (
            <span aria-label="required" className={`${classPrefix}_required-indicator`}>
              *
            </span>
          )}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={ref}
        className={`${classPrefix}_select-${id}`}
        required={required}
        aria-invalid={invalid}
        aria-labelledby={!labels.hide ? labelId : undefined}
      >
        <option value={-1} disabled>
          {labels.placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};
