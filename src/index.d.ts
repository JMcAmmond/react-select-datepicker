import * as React from "react";

export interface DropdownDatepickerProps {
  value: Date | null;
  minDate?: Date;
  maxDate?: Date;
  maxDateMessage?: string;
  minDateMessage?: string;
  invalidMessage?: string;
  showLabels?: boolean;
  showErrors?: boolean;
  onDateChange: (date: Date) => void;
  className?: string;
  format?: 'day/month/year' | 'day/year/month' | 'month/day/year' | 'month/year/day' | 'year/month/day' | 'year/day/month';
}

declare class DropdownDatepicker extends React.Component<DropdownDatepickerProps, any> { }

export default DropdownDatepicker;