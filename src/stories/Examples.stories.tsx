import React from 'react';

export default {
  title: 'Examples',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Configuration examples for react-select-datepicker',
      },
    },
  },
};

export const BasicExample = {
  render: () => {
    return React.createElement(
      'div',
      {
        style: { maxWidth: '500px', padding: '20px', fontFamily: 'Arial, sans-serif' },
      },
      [
        React.createElement(
          'h3',
          { style: { marginBottom: '16px', color: '#333' } },
          'Basic Usage'
        ),
        React.createElement(
          'p',
          { style: { marginBottom: '12px', color: '#666' } },
          'Simple date picker with default settings:'
        ),
        React.createElement(
          'pre',
          {
            style: {
              background: '#f8f9fa',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '14px',
              overflow: 'auto',
            },
          },
          `import { SelectDatepicker } from 'react-select-datepicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <SelectDatepicker
      selectedDate={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
}`
        ),
      ]
    );
  },
};

export const AdvancedExample = {
  render: () => {
    return React.createElement(
      'div',
      {
        style: { maxWidth: '600px', padding: '20px', fontFamily: 'Arial, sans-serif' },
      },
      [
        React.createElement(
          'h3',
          { style: { marginBottom: '16px', color: '#333' } },
          'Advanced Configuration'
        ),
        React.createElement(
          'p',
          { style: { marginBottom: '12px', color: '#666' } },
          'Date picker with custom labels and date range:'
        ),
        React.createElement(
          'pre',
          {
            style: {
              background: '#f8f9fa',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '14px',
              overflow: 'auto',
            },
          },
          `import { SelectDatepicker } from 'react-select-datepicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <SelectDatepicker
      selectedDate={selectedDate}
      onDateChange={setSelectedDate}
      minDate={new Date('2020-01-01')}
      maxDate={new Date('2030-12-31')}
      labels={{
        yearLabel: 'Year',
        monthLabel: 'Month',
        dayLabel: 'Day'
      }}
      order="day/month/year"
    />
  );
}`
        ),
      ]
    );
  },
};
