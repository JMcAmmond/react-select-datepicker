import { SelectDatepickerLabels } from '../types/SelectDatepickerLabels';
import { SelectDatepickerOrder } from '../types/SelectDatepickerOrder';

export interface ISelectDatepicker {
  /** Unique identifier for the date picker component */
  id?: string;
  /** Additional CSS class names */
  className?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Currently selected date (deprecated: use value) */
  selectedDate?: Date | null;
  /** Callback function called when date changes (deprecated: use onChange) */
  onDateChange?: (date: Date | null) => void;
  /** Controlled value (preferred) */
  value?: Date | null;
  /** Change handler (preferred) */
  onChange?: (date: Date | null) => void;
  /** Custom labels for the date picker */
  labels?: Partial<SelectDatepickerLabels>;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Whether the date picker has an error state */
  hasError?: boolean;
  /** Ref for the month select element */
  monthRef?: React.LegacyRef<HTMLSelectElement>;
  /** Ref for the year select element */
  yearRef?: React.LegacyRef<HTMLSelectElement>;
  /** Ref for the day select element */
  dayRef?: React.LegacyRef<HTMLSelectElement>;
  /** Whether to reverse the order of years in the dropdown */
  reverseYears?: boolean;
  /** Whether to hide labels above the select inputs */
  hideLabels?: boolean;
  /** Order of date selects (defaults to 'month/day/year') */
  order?: SelectDatepickerOrder;
}
