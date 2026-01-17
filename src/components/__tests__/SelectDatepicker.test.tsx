import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SelectDatepicker } from '../SelectDatepicker';

describe('SelectDatepicker Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render all three select fields', () => {
    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange: vi.fn(),
    });

    const selects = container.querySelectorAll('select');
    expect(selects).toHaveLength(3);

    // Check that default order is month/day/year
    expect(selects[0]).toHaveAttribute('id', 'rsd_select-month');
    expect(selects[1]).toHaveAttribute('id', 'rsd_select-day');
    expect(selects[2]).toHaveAttribute('id', 'rsd_select-year');
  });

  it('should handle custom order prop', () => {
    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange: vi.fn(),
      order: 'day/month/year',
    });

    const selects = container.querySelectorAll('select');
    // Check custom order is applied
    expect(selects[0]).toHaveAttribute('id', 'rsd_select-day');
    expect(selects[1]).toHaveAttribute('id', 'rsd_select-month');
    expect(selects[2]).toHaveAttribute('id', 'rsd_select-year');
  });

  it('should call onDateChange when all fields are selected', async () => {
    const onDateChange = vi.fn();
    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange,
    });

    const selects = container.querySelectorAll('select');

    // Select month
    await fireEvent.change(selects[0], { target: { value: '6' } });
    expect(onDateChange).not.toHaveBeenCalled();

    // Select day
    await fireEvent.change(selects[1], { target: { value: '15' } });
    expect(onDateChange).not.toHaveBeenCalled();

    // Select year
    await fireEvent.change(selects[2], { target: { value: '2024' } });

    // Should call onDateChange with the complete date
    expect(onDateChange).toHaveBeenCalledWith(new Date('2024-06-15'));
  });

  it('should handle smart date correction', async () => {
    const onDateChange = vi.fn();
    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange,
    });

    const selects = container.querySelectorAll('select');

    // Select impossible date (Feb 31)
    await fireEvent.change(selects[0], { target: { value: '2' } });
    await fireEvent.change(selects[1], { target: { value: '31' } });
    await fireEvent.change(selects[2], { target: { value: '2024' } });

    // Should call onDateChange with corrected date (Feb 28, 2024)
    expect(onDateChange).toHaveBeenCalledWith(new Date('2024-02-28'));
  });

  it('should show validation message when hasError is true', () => {
    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange: vi.fn(),
      hasError: true,
    });

    const errorMessage = container.querySelector('[role="alert"]');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please select a date');
  });

  it('should show custom labels', () => {
    const customLabels = {
      yearLabel: 'Year Custom',
      monthLabel: 'Month Custom',
      dayLabel: 'Day Custom',
      yearPlaceholder: 'Year PH',
      monthPlaceholder: 'Month PH',
      dayPlaceholder: 'Day PH',
    };

    const { container } = render(SelectDatepicker, {
      selectedDate: null,
      onDateChange: vi.fn(),
      labels: customLabels,
    });

    expect(container.textContent).toContain('Year Custom');
    expect(container.textContent).toContain('Month Custom');
    expect(container.textContent).toContain('Day Custom');
  });
});
