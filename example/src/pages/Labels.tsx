import React, { useState, useCallback } from 'react';
import { StyledSelectDatepicker } from '../common/select-datepicker';
import CodeTemplate from '../common/CodeTemplate';
import { PageHeader } from '../common/elements';

const Labels: React.FC = () => {
  const [monthsValue, setMonthsValue] = useState<Date | null>();
  const [labelsValue, setLabelsValue] = useState<Date | null>();
  const [placeholdersValue, setPlaceholdersValue] = useState<Date | null>();

  const onMonthsDateChange = useCallback((date: Date) => {
    setMonthsValue(date);
  }, []);
  const onLabelsDateChange = useCallback((date: Date) => {
    setLabelsValue(date);
  }, []);
  const onPlaceholdersDateChange = useCallback((date: Date) => {
    setPlaceholdersValue(date);
  }, []);

  return (
    <>
      <PageHeader>Labels</PageHeader>

      <CodeTemplate
        title="Custom Labels"
        code={months}
        exampleComponent={
          <StyledSelectDatepicker
            value={monthsValue}
            onDateChange={onMonthsDateChange}
            labels={{
              year: 'Año',
              month: 'Mes',
              day: 'Día',
            }}
            monthNames={[
              'enero',
              'febrero',
              'marzo',
              'abril',
              'mayo',
              'junio',
              'julio',
              'agosto',
              'septiembre',
              'octubre',
              'noviembre',
              'diciembre',
            ]}
          />
        }
      />
      <CodeTemplate
        title="Hide Labels"
        code={labels}
        exampleComponent={
          <StyledSelectDatepicker
            value={labelsValue}
            onDateChange={onLabelsDateChange}
            showLabels={false}
          />
        }
      />

      <CodeTemplate
        title="Hide Placeholders"
        code={placeholders}
        exampleComponent={
          <StyledSelectDatepicker
            value={placeholdersValue}
            onDateChange={onPlaceholdersDateChange}
            showPlaceholders={false}
          />
        }
      />
    </>
  );
};

export default Labels;

const months = `
  return (
    <SelectDatepicker
      labels={{
        year: 'Año',
        month: 'Mes',
        day: 'Día',
      }}
      monthNames={[
        'enero', 'febrero', 'marzo', 'abril',
        'mayo', 'junio', 'julio', 'agosto',
        'septiembre', 'octubre', 'noviembre', 'diciembre',
      ]}
      ...
    />
  )
`;

const labels = `
  return (
    <SelectDatepicker
      showLabels={false}
      ...
    />
  )
`;

const placeholders = `
  return (
    <SelectDatepicker
      showPlaceholders={false}  
      ...
    />
  )
`;
