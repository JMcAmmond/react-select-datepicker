export type Months = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};

export type SelectDatepickerOptions = {
  labels?: {
    yearLabel?: string;
    monthLabel?: string;
    dayLabel?: string;
    yearPlaceholder?: string;
    monthPlaceholder?: string;
    dayPlaceholder?: string;
    months?: Months;
  };
  reverseYears?: boolean;
  showLabels?: boolean;
  order?:
    | 'day/month/year'
    | 'day/year/month'
    | 'month/day/year'
    | 'month/year/day'
    | 'year/month/day'
    | 'year/day/month';
};
