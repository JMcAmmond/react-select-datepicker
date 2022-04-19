import React, { useCallback, useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectDatepicker } from '../components/SelectDatepicker';

export default {
  title: 'SelectDatepicker',
  component: SelectDatepicker,
  argTypes: { minDate: { control: 'date' } },
} as ComponentMeta<typeof SelectDatepicker>;

const Template: ComponentStory<typeof SelectDatepicker> = (args) => {
  args.minDate = args.minDate ? new Date(args.minDate) : undefined;
  args.maxDate = args.maxDate ? new Date(args.maxDate) : undefined;
  const [selected, setSelected] = useState(
    args.selectedDate ? new Date(args.selectedDate) : undefined
  );

  const handleDateChange = useCallback((date) => {
    setSelected(date);
  }, []);

  useEffect(
    () => setSelected(args.selectedDate ? new Date(args.selectedDate) : undefined),
    [args.selectedDate]
  );

  return <SelectDatepicker {...args} selectedDate={selected} onDateChange={handleDateChange} />;
};

export const Default = Template.bind({});

export const DateRange = Template.bind({});
DateRange.args = {
  minDate: new Date('10/10/2013'),
  maxDate: new Date('01/23/2019'),
};

export const SetDate = Template.bind({});
SetDate.args = {
  selectedDate: new Date('02/16/2019'),
};

export const Labels = Template.bind({});
Labels.args = {
  labels: {
    yearLabel: 'Año',
    monthLabel: 'Mes',
    dayLabel: 'Día',
    yearPlaceholder: 'Año',
    monthPlaceholder: 'Mes',
    dayPlaceholder: 'Día',
    months: {
      1: 'enero',
      2: 'febrero',
      3: 'marzo',
      4: 'abril',
      5: 'mayo',
      6: 'junio',
      7: 'julio',
      8: 'agosto',
      9: 'septiembre',
      10: 'octubre',
      11: 'noviembre',
      12: 'diciembre',
    },
  },
};

export const Order = Template.bind({});
Order.args = {
  order: 'day/year/month',
};

export const ReverseYears = Template.bind({});
ReverseYears.args = {
  reverseYears: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const HideLabels = Template.bind({});
HideLabels.args = {
  hideLabels: true,
};
