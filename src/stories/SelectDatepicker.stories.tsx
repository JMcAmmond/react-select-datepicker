import React from 'react';
import { SelectDatepicker } from '../components/SelectDatepicker';
import { SelectDatepickerErrorBoundary } from '../components/SelectDatepickerErrorBoundary';
import type { SelectDatepickerOrder } from '../types/SelectDatepickerOrder';

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
            groupLabel: 'Select your travel date',
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

export const WithErrorState = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'Error State'),
        React.createElement(SelectDatepicker, {
          id: 'error-state',
          selectedDate: selected,
          onDateChange: handleDateChange,
          hasError: true,
        }),
      ]
    );
  },
};

export const WithHiddenLabels = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'Hidden Labels'),
        React.createElement(SelectDatepicker, {
          id: 'hidden-labels',
          selectedDate: selected,
          onDateChange: handleDateChange,
          hideLabels: true,
        }),
      ]
    );
  },
};

export const WithReverseYears = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      [
        React.createElement('h3', null, 'Reverse Years'),
        React.createElement(SelectDatepicker, {
          id: 'reverse-years',
          selectedDate: selected,
          onDateChange: handleDateChange,
          reverseYears: true,
        }),
      ]
    );
  },
};

export const WithCustomMonths = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '420px' },
      },
      [
        React.createElement('h3', null, 'Custom Month Labels'),
        React.createElement(SelectDatepicker, {
          id: 'custom-months',
          selectedDate: selected,
          onDateChange: handleDateChange,
          labels: {
            monthLabel: 'Mes',
            dayLabel: 'Día',
            yearLabel: 'Año',
            monthPlaceholder: 'Selecciona mes',
            dayPlaceholder: 'Selecciona día',
            yearPlaceholder: 'Selecciona año',
            months: {
              1: 'Enero',
              2: 'Febrero',
              3: 'Marzo',
              4: 'Abril',
              5: 'Mayo',
              6: 'Junio',
              7: 'Julio',
              8: 'Agosto',
              9: 'Septiembre',
              10: 'Octubre',
              11: 'Noviembre',
              12: 'Diciembre',
            },
          },
        }),
      ]
    );
  },
};

export const WithSmartDateCorrection = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '440px' },
      },
      [
        React.createElement('h3', null, 'Smart Date Correction'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Try selecting Jan 31, then switch month to February.'
        ),
        React.createElement(SelectDatepicker, {
          id: 'smart-correction',
          selectedDate: selected,
          onDateChange: handleDateChange,
        }),
        selected &&
          React.createElement(
            'div',
            { style: { marginTop: '10px', padding: '10px', background: '#f6f8fa' } },
            [
              React.createElement('strong', null, 'Selected: '),
              React.createElement('span', null, selected.toDateString()),
            ]
          ),
      ]
    );
  },
};

export const WithRangeLimits = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '460px' },
      },
      [
        React.createElement('h3', null, 'Range Limits'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Range: 2020-01-01 to 2025-12-31'
        ),
        React.createElement(SelectDatepicker, {
          id: 'range-limits',
          selectedDate: selected,
          onDateChange: handleDateChange,
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 11, 31),
        }),
        selected &&
          React.createElement(
            'div',
            { style: { marginTop: '10px', padding: '10px', background: '#f6f8fa' } },
            [
              React.createElement('strong', null, 'Selected: '),
              React.createElement('span', null, selected.toDateString()),
            ]
          ),
      ]
    );
  },
};

export const WithInvalidOrderFallback = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '420px' },
      },
      [
        React.createElement('h3', null, 'Invalid Order Fallback'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Passing an invalid order falls back to month/day/year.'
        ),
        React.createElement(SelectDatepicker, {
          id: 'invalid-order',
          selectedDate: selected,
          onDateChange: handleDateChange,
          order: 'month-year-day' as unknown as SelectDatepickerOrder,
        }),
      ]
    );
  },
};

export const WithThemingOverrides = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(null);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '880px' },
      },
      [
        React.createElement('h3', null, 'Theming Overrides (CSS Vars)'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'These styles are applied via CSS custom properties on the root element.'
        ),
        React.createElement(SelectDatepicker, {
          id: 'theme-overrides',
          selectedDate: selected,
          onDateChange: handleDateChange,
          className: 'rsd-theme-sunset',
        }),
        React.createElement(
          'style',
          null,
          `.rsd-theme-sunset {
            --rsd-gap: 18px;
            --rsd-legend-font-size: 20px;
            --rsd-legend-font-weight: 800;
            --rsd-error-color: #ff00a8;
            --rsd-select-padding: 12px 16px;
            --rsd-select-border: 2px solid #7c3aed;
            --rsd-select-border-radius: 999px;
            --rsd-select-font-size: 16px;
            --rsd-select-disabled-bg: #fdf4ff;
            --rsd-select-disabled-color: #a21caf;
            --rsd-required-color: #16a34a;

            background: radial-gradient(circle at 20% 20%, #fef9c3, #fbcfe8 40%, #c7d2fe 70%, #f0abfc 100%);
            padding: 20px;
            border-radius: 18px;
            border: 2px dashed #0ea5e9;
            box-shadow: 0 12px 30px rgba(14, 165, 233, 0.25), 0 6px 12px rgba(124, 58, 237, 0.2);
            overflow: hidden;
          }

          .rsd-theme-sunset .rsd__select {
            background: linear-gradient(135deg, #fef3c7, #e0f2fe);
            color: #0f172a;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-sunset .rsd__select-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .rsd-theme-sunset .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #7c3aed;
          }

          .rsd-theme-sunset .rsd__error-message {
            background: #fff1f2;
            padding: 8px 12px;
            border-radius: 10px;
          }`
        ),
      ]
    );
  },
};

const CrashOnRender = () => {
  throw new Error('Intentional render error');
};

export const WithErrorBoundary = {
  render: () => {
    return (
      <div style={{ padding: '20px', maxWidth: '480px' }}>
        <h3>Error Boundary</h3>
        <p style={{ marginBottom: '12px' }}>
          This example intentionally throws to demonstrate the fallback UI.
        </p>
        <SelectDatepickerErrorBoundary
          renderFallback={(error) => (
            <div
              role="alert"
              style={{
                padding: '12px',
                borderRadius: '8px',
                background: '#fff1f2',
                color: '#9f1239',
              }}
            >
              Error: {error.message}
            </div>
          )}
        >
          <CrashOnRender />
        </SelectDatepickerErrorBoundary>
      </div>
    );
  },
};
