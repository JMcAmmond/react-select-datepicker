import React from 'react';
import { SelectDatepicker } from '../components/SelectDatepicker';

export default {
  title: 'SelectDatepicker',
  component: SelectDatepicker,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(SelectDatepicker, {
      selectedDate: selected,
      onDateChange: handleDateChange,
    });
  },
};

export const WithDateRange = {
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'With Date Range'),
        React.createElement(SelectDatepicker, {
          selectedDate: selected,
          onDateChange: handleDateChange,
          minDate: new Date('2023-01-01'),
          maxDate: new Date('2025-12-31'),
        }),
      ]
    );
  },
};

export const WithCustomLabels = {
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'With Custom Labels'),
        React.createElement(SelectDatepicker, {
          selectedDate: selected,
          onDateChange: handleDateChange,
          labels: {
            yearLabel: 'Year',
            monthLabel: 'Month',
            dayLabel: 'Day',
            yearPlaceholder: 'Select Year',
            monthPlaceholder: 'Select Month',
            dayPlaceholder: 'Select Day',
          },
        }),
      ]
    );
  },
};

export const DifferentOrder = {
  render: () => {
    const [selected, setSelected] = React.useState(null);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'Different Order (Day/Month/Year)'),
        React.createElement(SelectDatepicker, {
          selectedDate: selected,
          onDateChange: handleDateChange,
          order: 'day/month/year',
        }),
      ]
    );
  },
};

export const Disabled = {
  render: () => {
    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'Disabled State'),
        React.createElement(SelectDatepicker, {
          selectedDate: new Date(),
          onDateChange: () => {},
          disabled: true,
        }),
      ]
    );
  },
};
