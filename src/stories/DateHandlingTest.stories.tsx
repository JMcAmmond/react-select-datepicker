import React from 'react';
import { SelectDatepicker } from '../components/SelectDatepicker';

export default {
  title: 'Tests',
  component: SelectDatepicker,
  parameters: {
    layout: 'centered',
  },
};

export const DateHandlingTest = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { maxWidth: '400px', padding: '20px' },
      },
      [
        React.createElement('h3', null, 'Date Handling Test'),
        React.createElement(
          'p',
          null,
          'Test the date picker with our new date handling improvements'
        ),
        React.createElement(SelectDatepicker, {
          selectedDate: selected,
          onDateChange: handleDateChange,
        }),
        selected &&
          React.createElement(
            'div',
            {
              style: { marginTop: '10px', padding: '10px', background: '#e8f5e8' },
            },
            [
              React.createElement('strong', null, 'Selected: '),
              React.createElement('br'),
              React.createElement('span', null, selected?.toDateString()),
            ]
          ),
      ]
    );
  },
};
