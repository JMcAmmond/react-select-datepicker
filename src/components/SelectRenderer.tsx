import React from 'react';

interface ISelectRenderer {
  id: string;
  labels: {
    show?: boolean;
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
      className={`sdp_select-container-${id}`}
    >
      {labels.show && <label htmlFor={id}>{labels.main}</label>}
      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={ref}
        className={`spd_select-${id}`}
      >
        <option value={-1} disabled>
          {labels.placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};
