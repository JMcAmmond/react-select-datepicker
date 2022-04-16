# react-select-datepicker

A simple and reusable dropdown datepicker component for React ([Demo](https://jeffmcammond.com/react-select-datepicker/))

[![NPM](https://img.shields.io/npm/v/react-select-datepicker.svg)](https://www.npmjs.com/package/react-select-datepicker)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-select-datepicker)
![GitHub contributors](https://img.shields.io/github/contributors/jmcammond/react-select-datepicker)
![npm](https://img.shields.io/npm/dt/react-select-datepicker)
![NPM](https://img.shields.io/npm/l/react-select-datepicker)

![Select Datepicker](https://raw.githubusercontent.com/JMcAmmond/public-assets/main/react-select-datepicker.PNG 'Select Datepicker')

## Install

```bash
npm install --save react-select-datepicker
```

## Usage

```tsx
import React, { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      selectedDate={value}
      onDateChange={onDateChange}
    />
  );
};
```

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)
