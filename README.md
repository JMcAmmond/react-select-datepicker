[![NPM](https://img.shields.io/npm/v/react-select-datepicker.svg)](https://www.npmjs.com/package/react-select-datepicker)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-select-datepicker)
![GitHub contributors](https://img.shields.io/github/contributors/jmcammond/react-select-datepicker)
![npm](https://img.shields.io/npm/dt/react-select-datepicker)
![NPM](https://img.shields.io/npm/l/react-select-datepicker)

# react-select-datepicker

A simple and reusable dropdown datepicker component for React ([Demo](https://jeffmcammond.com/react-select-datepicker/))

![Select Datepicker](https://github.com/jmcammond/react-select-datepicker/raw/master/example/assets/select-datepicker.png 'Select Datepicker')

## Install

```bash
npm install --save react-select-datepicker
```

## Usage

```tsx
import React, { useState, useCallback } from 'react';
import SelectDatepicker from 'react-select-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      value={value}
      onDateChange={onDateChange}
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date()}
    />
  );
};
```

## Available Props

| Prop              | Type    | Default                                   | Options                                                                                                    |
| ----------------- | ------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| value             | Date    | -                                         | -                                                                                                          |
| onDateChange      | func    | -                                         | -                                                                                                          |
| minDate?          | Date    | -                                         | -                                                                                                          |
| maxDate?          | Date    | -                                         | -                                                                                                          |
| maxDateMessage?   | string  | 'Date must be less than {maxDate + 1}'    | -                                                                                                          |
| minDateMessage?   | string  | 'Date must be greater than {minDate - 1}' | -                                                                                                          |
| invalidMessage?   | string  | 'Not a valid date'                        | -                                                                                                          |
| showLabels?       | boolean | true                                      | true, false                                                                                                |
| showPlaceholders? | boolean | true                                      | true, false                                                                                                |
| showErrors?       | boolean | true                                      | true, false                                                                                                |
| format?           | string  | 'month/day/year'                          | 'day/month/year', 'day/year/month', 'month/day/year', 'month/year/day', 'year/month/day', 'year/day/month' |
| labels?           | Object  | English labels                            | { year: 'Year'; month: 'Month'; day: 'Day'; }                                                              |
| monthNames?       | Array   | English month names                       | ['Jan', 'Feb', 'Mar'...]                                                                                   |

## Notes

#### Year Select Field

If no minDate is provided than the minium year that can be selected is 1900  
If no maxDate is provided than the maxium year that can be selected is the current

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)
