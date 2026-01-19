import React from 'react';
import { SelectDatepickerLabels } from '../types/SelectDatepickerLabels';

export type DatepickerFieldKey = 'day' | 'month' | 'year';

export interface SelectDatepickerContextValue {
  baseId: string;
  labels: Partial<SelectDatepickerLabels>;
  hideLabels?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  isInvalid?: boolean;
  day: number;
  month: number;
  year: number;
  dayOptions: JSX.Element;
  monthOptions: JSX.Element;
  yearOptions: JSX.Element;
  dayRef?: React.LegacyRef<HTMLSelectElement>;
  monthRef?: React.LegacyRef<HTMLSelectElement>;
  yearRef?: React.LegacyRef<HTMLSelectElement>;
  onDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectDatepickerContext = React.createContext<SelectDatepickerContextValue | null>(
  null
);
