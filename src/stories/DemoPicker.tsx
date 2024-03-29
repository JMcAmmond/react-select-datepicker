import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectDatepicker } from '../components/SelectDatepicker';

const StyledDatePicker = styled(SelectDatepicker)`
  max-width: 500px;
  width: 100%;

  & > div {
    margin: 0 5px;
    width: 100%;
  }

  select {
    color: rgb(68, 68, 68);
    font-size: 13px;
    padding: 10px 5px;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  label {
    font-size: 0.8rem;
    margin-bottom: 5px;
    font-weight: 600;
  }

  option {
    font-size: 16px;
  }
`;

const DemoPicker = () => {
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return <StyledDatePicker onDateChange={(date) => setValue(date)} selectedDate={value} />;
};

export { DemoPicker };
