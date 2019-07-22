# react-select-datepicker

> 

[![NPM](https://img.shields.io/npm/v/react-input-datepicker.svg)](https://www.npmjs.com/package/react-select-datepicker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple and reusable dropdown datepicker component for React ([Demo](https://jeffmcammond.com/react-select-datepicker/))

![Select Datepicker](https://github.com/jmcammond/react-select-datepicker/raw/master/example/assets/select-datepicker.png "Select Datepicker")

## Install

```bash
npm install --save react-select-datepicker
```

## Usage

```jsx
import React, { Component } from 'react'

import SelectDatepicker from 'react-select-datepicker';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onDateChange = date => {
    this.setState({
      value: date
    });
  };

  render() {
    return (
      <div>
        <SelectDatepicker
          value={this.state.value}
          onDateChange={this.onDateChange}
          minDate={new Date(1900, 0, 1)}
          maxDate={new Date()}
        />
      </div>
    );
  }
}
```

## Available Props

| Prop           | Type    | Default                                   | Options     |
|----------------|---------|-------------------------------------------|-------------|
| value          | Date    | -                                         | -           |
| minDate        | Date    | -                                         | -           |
| maxDate        | Date    | -                                         | -           |
| maxDateMessage | string  | 'Date must be less than {maxDate + 1}'    | -           |
| minDateMessage | string  | 'Date must be greater than {minDate - 1}' | -           |
| invalidMessage | string  | 'Not a valid date'                        | -           |
| showLabels     | boolean | true                                      | true, false |
| showErrors     | boolean | true                                      | true, false |
| onDateChange   | func    | -                                         | -           |
| format         | string  | 'month/day/year'                          | 'day/month/year', 'day/year/month', 'month/day/year', 'month/year/day', 'year/month/day', 'year/day/month' |

## Notes
#### Year Select Field   
If no minDate is provided than the minium year that can be selected is 1900  
If no maxDate is provided than the maxium year that can be selected is the current

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)

