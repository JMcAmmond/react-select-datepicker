import { SelectDatepickerOptions } from '../types/SelectDatepickerOptions';

export interface ISelectDatepicker {
  id?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date | null;
  onDateChange: (date: Date | null) => void;
  options?: SelectDatepickerOptions;
  disabled?: boolean;
  hasError?: boolean;
  monthRef?: React.LegacyRef<HTMLSelectElement>;
  yearRef?: React.LegacyRef<HTMLSelectElement>;
  dayRef?: React.LegacyRef<HTMLSelectElement>;
}
