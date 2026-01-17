import React from 'react';

interface IOptionsRenderer {
  options: { value: number; label: string }[];
}

// Removed unnecessary useMemo - options are primitive values and React handles memoization of option elements efficiently
export const OptionsRenderer = ({ options }: IOptionsRenderer) => {
  return (
    <>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  );
};
