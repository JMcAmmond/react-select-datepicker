import React, { useState, useCallback } from 'react';
import { StyledSelectDatepicker } from '../common/select-datepicker';
import CodeTemplate from '../common/CodeTemplate';
import { PageHeader } from '../common/elements';

const Errors: React.FC = () => {
  const [minValue, setMinValue] = useState<Date | null>(new Date(1956, 0, 1));
  const [maxValue, setMaxValue] = useState<Date | null>(new Date());
  const [invalidValue, setInvalidValue] = useState<Date | null>(
    new Date(2020, 1, 28),
  );
  const [showValue, setShowValue] = useState<Date | null>(new Date());

  const onMinDateChange = useCallback((date: any) => {
    setMinValue(date);
  }, []);
  const onMaxDateChange = useCallback((date: any) => {
    setMaxValue(date);
  }, []);
  const onInvalidDateChange = useCallback((date: any) => {
    setInvalidValue(date);
  }, []);
  const onShowDateChange = useCallback((date: any) => {
    setShowValue(date);
  }, []);

  return (
    <>
      <PageHeader>Errors</PageHeader>

      <CodeTemplate
        title="Max Date Message"
        code={maxDate}
        exampleComponent={
          <StyledSelectDatepicker
            value={maxValue}
            onDateChange={onMaxDateChange}
            maxDate={new Date(1999, 11, 31)}
            maxDateMessage="Wow there cowboy. That date is over the max."
          />
        }
      />

      <CodeTemplate
        title="Min Date Message"
        code={minDate}
        exampleComponent={
          <StyledSelectDatepicker
            value={minValue}
            onDateChange={onMinDateChange}
            minDate={new Date(2000, 0, 1)}
            minDateMessage="Try something a little bigger wont you."
          />
        }
      />

      <CodeTemplate
        title="Invalid Date Message"
        code={invalidDate}
        exampleComponent={
          <StyledSelectDatepicker
            value={invalidValue}
            onDateChange={onInvalidDateChange}
            invalidMessage="I don't think this is correct"
          />
        }
      />

      <CodeTemplate
        title="Hide Error Messages"
        code={show}
        exampleComponent={
          <StyledSelectDatepicker
            value={showValue}
            onDateChange={onShowDateChange}
            maxDate={new Date(1999, 11, 31)}
            showErrors={false}
          />
        }
      />
    </>
  );
};

export default Errors;

const minDate = `
  return (
    <SelectDatepicker
      minDate={new Date(2000, 0, 1)}
      minDateMessage="Try something a little bigger wont you."
      ...
    />
  )
`;

const maxDate = `
  return (
    <SelectDatepicker
      maxDate={new Date(1999, 11, 31)}
      maxDateMessage="Wow there cowboy. That date is over the max."
      ...
    />
  )
`;

const invalidDate = `
  // Try entering Feb 31

  return (
    <SelectDatepicker
      invalidMessage="I don't think this is correct"
      ...
    />
  )
`;

const show = `
  return (
    <SelectDatepicker
      maxDate={new Date(1999, 11, 31)}
      showErrors={false}
      ...
    />
  )
`;
