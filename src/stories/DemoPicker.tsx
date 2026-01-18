import React, { useState, useCallback } from 'react';
import { SelectDatepicker } from '../components/SelectDatepicker';

// MDX-compatible component that can be imported in MDX
const DemoPickerComponent = () => {
  const [value, setValue] = useState<Date | null>(null);

  const onDateChange = useCallback((date: Date | null) => {
    setValue(date);
  }, []);

  return (
    <SelectDatepicker
      selectedDate={value}
      onDateChange={onDateChange}
      className="rsd-theme-sunset"
    />
  );
};

export default DemoPickerComponent;
