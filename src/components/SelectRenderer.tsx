import React from 'react';
import { classPrefix } from '../utils/helpers';

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
}

export const SelectRenderer = ({
  id,
  labels,
  value,
  disabled,
  onChangeHandler,
  selectOptions,
  ref,
}: ISelectRenderer) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}
      className={`${classPrefix}_select-container-${id}`}
    >
      {!labels.hide && <label htmlFor={`${classPrefix}_select-${id}`}>{labels.main}</label>}
      <select
        id={`${classPrefix}_select-${id}`}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={ref}
        className={`${classPrefix}_select-${id}`}
      >
        <option value={-1} disabled>
          {labels.placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};
