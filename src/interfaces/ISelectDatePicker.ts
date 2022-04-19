import { SelectDatePickerLabels } from '../types/SelectDatepickerLabels';
import { SelectDatePickerOrder } from '../types/SelectDatepickerOrder';

export interface ISelectDatepicker {
  id?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date | null;
  onDateChange: (date: Date | null) => void;
  labels?: SelectDatePickerLabels;
  disabled?: boolean;
  hasError?: boolean;
  monthRef?: React.LegacyRef<HTMLSelectElement>;
  yearRef?: React.LegacyRef<HTMLSelectElement>;
  dayRef?: React.LegacyRef<HTMLSelectElement>;
  reverseYears?: boolean;
  hideLabels?: boolean;
  order?: SelectDatePickerOrder;
}
