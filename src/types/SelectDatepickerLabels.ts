export type Months = {
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  readonly 5: string;
  readonly 6: string;
  readonly 7: string;
  readonly 8: string;
  readonly 9: string;
  readonly 10: string;
  readonly 11: string;
  readonly 12: string;
};

export type SelectDatepickerLabels = {
  /** Single label for the entire date picker group */
  readonly groupLabel?: string;
  /** Label for the year select field */
  readonly yearLabel?: string;
  /** Label for the month select field */
  readonly monthLabel?: string;
  /** Label for the day select field */
  readonly dayLabel?: string;
  /** Placeholder for the year select field */
  readonly yearPlaceholder?: string;
  /** Placeholder for the month select field */
  readonly monthPlaceholder?: string;
  /** Placeholder for the day select field */
  readonly dayPlaceholder?: string;
  /** Custom month names (1-12 indexed) */
  readonly months?: Months;
};
