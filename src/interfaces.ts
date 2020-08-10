export interface ISelectDatePicker {
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
  format?:
    | 'day/month/year'
    | 'day/year/month'
    | 'month/day/year'
    | 'month/year/day'
    | 'year/month/day'
    | 'year/day/month';
  labels?: ILabels;
  monthNames?: Array<string>;
}

export interface IDate {
  day: string;
  month: string;
  year: string;
}

export interface ILabels {
  year: string;
  month: string;
  day: string;
}
