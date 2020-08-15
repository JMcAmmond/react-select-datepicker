import styled from 'styled-components';
import SelectDatepicker from 'react-select-datepicker';

const StyledSelectDatepicker: any = styled(SelectDatepicker)`
  .rsd_date-container {
    > div {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }

      label {
        font-size: 0.8rem;
        margin-bottom: 5px;
        font-weight: 600;
      }

      select {
        color: #444444;
        font-size: 13px;
        padding: 11px;
        border-radius: 3px;
        border: none;
        text-align: center;

        &.has-error {
          border: 2px solid #f97474;
        }
      }
    }

    .rsd_day-container select {
      cursor: pointer;
    }
    .rsd_month-container select {
      cursor: pointer;
    }
    .rsd_year-container select {
      cursor: pointer;
    }
  }

  .error-message {
    color: #f97474;
    margin-top: 6px;
    font-size: 0.9rem;
  }
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .rsd_date-container {
    justify-content: center;
  }
`;

export { StyledSelectDatepicker, DateContainer };
