import React from 'react';
import { SelectDatepicker } from '../components/SelectDatepicker';
import { SelectDatepickerErrorBoundary } from '../components/SelectDatepickerErrorBoundary';
import type { SelectDatepickerOrder } from '../types/SelectDatepickerOrder';

const resolveDateArg = (value: unknown): Date | null => {
  if (typeof value === 'number') return new Date(value);
  if (typeof value === 'string' && value.trim().length > 0) return new Date(value);
  if (value instanceof Date) return value;
  return null;
};

const resolveOptionalDateArg = (value: unknown): Date | undefined => {
  if (typeof value === 'number') return new Date(value);
  if (typeof value === 'string' && value.trim().length > 0) return new Date(value);
  if (value instanceof Date) return value;
  return undefined;
};

const useStoryDateState = (value: unknown) => {
  const resolved = resolveDateArg(value);
  const [selected, setSelected] = React.useState<Date | null>(resolved);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(resolved);
    }
  }, [value, resolved]);

  const displaySelected = selected ?? resolved;

  return [selected, setSelected, displaySelected] as const;
};

const withKeys = (nodes: React.ReactNode[]) =>
  nodes.map((node, index) =>
    React.isValidElement(node) ? React.cloneElement(node, { key: node.key ?? index }) : node
  );

const renderSelectedDate = (selected: Date | null) =>
  selected
    ? React.createElement(
        'div',
        { style: { marginTop: '10px', padding: '10px', background: '#f6f8fa' } },
        withKeys([
          React.createElement('strong', null, 'Selected: '),
          React.createElement('span', null, selected.toDateString()),
        ])
      )
    : null;

const meta = {
  title: 'SelectDatepicker',
  component: SelectDatepicker,
  parameters: {
    layout: 'centered',
  },
  args: {
    order: 'month/day/year',
    reverseYears: false,
    hideLabels: false,
    disabled: false,
    hasError: false,
    labels: {},
    selectedDate: undefined,
    minDate: undefined,
    maxDate: undefined,
  },
  argTypes: {
    order: {
      control: { type: 'select' },
      //options: ['month/day/year', 'day/month/year', 'year/month/day', 'month/year/day'],
    },
    reverseYears: { control: 'boolean' },
    hideLabels: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    labels: { control: 'object' },
    selectedDate: { control: 'date' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    onDateChange: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export default meta;

export const Default = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      { style: { padding: '20px', maxWidth: '400px' } },
      withKeys([
        React.createElement(SelectDatepicker, {
          ...rest,
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
};

export const WithDateRange = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2023, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'With Date Range'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px', color: '#555' } },
          'Allowed range: Jan 1, 2023 – Dec 31, 2025'
        ),
        React.createElement(SelectDatepicker, {
          ...rest,
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolvedMinDate,
          maxDate: resolvedMaxDate,
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
};

export const WithCustomLabels = {
  render: (args: any) => {
    const { selectedDate, labels, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    const spanishMonths = {
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
    } as const;

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Custom Labels + Months (Spanish)'),
        React.createElement(SelectDatepicker, {
          ...rest,
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
          labels: {
            groupLabel: 'Selecciona tu fecha de viaje',
            yearLabel: 'Año',
            monthLabel: 'Mes',
            dayLabel: 'Día',
            yearPlaceholder: 'Selecciona año',
            monthPlaceholder: 'Selecciona mes',
            dayPlaceholder: 'Selecciona día',
            months: spanishMonths,
            ...labels,
          },
        }),
        renderSelectedDate(displaySelected),
        React.createElement(
          'div',
          { style: { marginTop: '10px', color: '#555', fontSize: '13px' } },
          Object.values(spanishMonths).join(' · ')
        ),
      ])
    );
  },
  args: {
    order: 'day/month/year',
  },
};

export const DifferentOrder = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Different Order (Day/Month/Year)'),
        React.createElement(SelectDatepicker, {
          ...rest,
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
  args: {
    order: 'day/month/year',
  },
};

export const Disabled = {
  render: (args: any) => {
    const selectedDate = new Date();

    const { minDate, maxDate, onChange, onDateChange, ...rest } = args;

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Disabled State'),
        React.createElement(SelectDatepicker, {
          ...rest,
          selectedDate: selectedDate,
          onDateChange: () => {},
          onChange: () => {},
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(selectedDate),
      ])
    );
  },
  args: {
    disabled: true,
  },
};

export const WithErrorState = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Error State'),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'error-state',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
  args: {
    hasError: true,
  },
};

export const WithHiddenLabels = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Hidden Labels'),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'hidden-labels',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
  args: {
    hideLabels: true,
  },
};

export const WithReverseYears = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '400px' },
      },
      withKeys([
        React.createElement('h3', null, 'Reverse Years'),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'reverse-years',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
  args: {
    reverseYears: true,
  },
};

export const WithSmartDateCorrection = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '440px' },
      },
      withKeys([
        React.createElement('h3', null, 'Smart Date Correction'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Try selecting Jan 31, then switch month to February.'
        ),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'smart-correction',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
};

export const WithRangeLimits = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2020, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '460px' },
      },
      withKeys([
        React.createElement('h3', null, 'Range Limits'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Range: 2020-01-01 to 2025-12-31'
        ),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'range-limits',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolvedMinDate,
          maxDate: resolvedMaxDate,
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
};

export const WithInvalidOrderFallback = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '420px' },
      },
      withKeys([
        React.createElement('h3', null, 'Invalid Order Fallback'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'Passing an invalid order falls back to month/day/year.'
        ),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'invalid-order',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
        }),
        renderSelectedDate(displaySelected),
      ])
    );
  },
  args: {
    order: 'month-year-day' as unknown as SelectDatepickerOrder,
  },
};

export const WithThemingOverrides = {
  render: (args: any) => {
    const { selectedDate, minDate, maxDate, className, onChange, onDateChange, ...rest } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);

    return React.createElement(
      'div',
      {
        style: { padding: '20px', maxWidth: '880px' },
      },
      withKeys([
        React.createElement('h3', null, 'Theming Overrides (CSS Vars)'),
        React.createElement(
          'p',
          { style: { marginBottom: '12px' } },
          'These styles are applied via CSS custom properties on the root element.'
        ),
        React.createElement(SelectDatepicker, {
          ...rest,
          id: 'theme-overrides',
          selectedDate: selected,
          onDateChange: handleDateChange,
          onChange: handleDateChange,
          minDate: resolveOptionalDateArg(minDate),
          maxDate: resolveOptionalDateArg(maxDate),
          className: className || 'rsd-theme-aurora',
        }),
        renderSelectedDate(displaySelected),
        React.createElement(
          'style',
          null,
          `.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }`
        ),
      ])
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
