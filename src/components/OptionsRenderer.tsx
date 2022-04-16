import React, { useMemo } from 'react';

interface IOptionsRenderer {
  options: { value: number; label: string }[];
}

export const OptionsRenderer = ({ options }: IOptionsRenderer) => {
  const toRender = useMemo(() => {
    return options.map((item, _) => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
  }, [options]);

  return <>{toRender}</>;
};
