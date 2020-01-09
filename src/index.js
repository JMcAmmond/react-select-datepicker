import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isValidDate, buildDateFromInput } from './dateValidation'
import { getDays, getMonths, getYears } from './dateMap'

import styles from './styles.css'

export default class SelectDatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      error: null,
      hasError: false,
      ...this.getDateStateFromProps(props)
    }
  }

  componentDidMount = () => {
    this.validate()
  }

  /**
   * Update state when props change
   */
  componentWillReceiveProps = (props) => {
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value,
        ...this.getDateStateFromProps(props)
      })
    }

    return null
  }

  /**
   * Parse date object into day, month, year state
   */
  getDateStateFromProps = (props) => {
    return {
      day: props.value ? props.value.getDate() : '',
      month: props.value ? props.value.getMonth() + 1 : '',
      year: props.value ? props.value.getFullYear() : ''
    }
  }

  /**
   * Handle input hange event
   */
  onInputChange = (e) => {
    this.setState({
      error: '',
      hasError: false,
      [e.target.name]: e.target.value
    }, () => {
      this.validate()
    })
  }

  /**
   * Validate inputs. Varify that they are set and contain a valid date.
   */
  validate = () => {
    const { day, month, year } = this.state

    // Must contain values
    if (!day || !month || !year) {
      this.onDateChange(null)
      return
    }

    // Validate date input
    const error = isValidDate(day, month, year, this.props)
    if (error !== '') {
      this.renderError(error, true)
      return
    }

    this.validDateChange()
  }

  /**
   * Set error state
   */
  renderError = (error, hasError) => {
    this.setState({
      error: error,
      hasError: hasError
    })

    this.onDateChange(null)
  }

  /**
   * Convert inputs to date object and call onDateChange function
   */
  validDateChange = () => {
    const date = buildDateFromInput(this.state.day, this.state.month, this.state.year)

    this.onDateChange(date.toDate())
  }

  /**
   * Set date object in state and return new date
   */
  onDateChange = (date) => {
    this.setState({
      value: date
    }, () => {
      this.props.onDateChange(date)
    })
  }

  /**
   * Return requested date container
   */
  getDateFormat = (value) => {
    const dayLabel = (this.props.labels && this.props.labels.day) || 'Day';
    const monthLabel = (this.props.labels && this.props.labels.month) || 'Month';
    const yearLabel = (this.props.labels && this.props.labels.year) ||'Year';

    const format = {
      day: this.renderDateContainer(
        'rid_day-container',
        'day',
        dayLabel,
        this.state.day,
        getDays(this.props.showLabels, dayLabel)
      ),
      month: this.renderDateContainer(
        'rid_month-container',
        'month',
        monthLabel,
        this.state.month,
        getMonths(this.props.showLabels, monthLabel, this.props.monthNames)
      ),
      year: this.renderDateContainer(
        'rid_year-container',
        'year',
        yearLabel,
        this.state.year,
        getYears(this.props.maxDate, this.props.minDate, this.props.showLabels, this.state.year, yearLabel)
      )
    }

    return format[value]
  }

  /**
   * Renders a date container element
   */
  renderDateContainer = (className, id, label, value, options) => {
    return (
      <div className={`${className} ${styles.flexColumn}`}>
        {this.props.showLabels ? <label htmlFor={id}>{label}</label> : null}
        <select
          className={`${this.state.hasError ? 'has-error' : ''}`}
          id={id}
          name={id}
          value={value}
          onChange={this.onInputChange}
        >
          {options.map((value, i) => {
            return (
              <React.Fragment key={i}>
                {value}
              </React.Fragment>
            )
          })}
        </select>
      </div>
    )
  }

  render() {
    const orderArray = this.props.format.split('/')
console.log('render');
    return (
      <div className={`rid ${this.props.className}`}>
        <div className={`rid_date-container ${styles.flexRow}`}>
          {orderArray.map((value, i) => {
            return (
              <React.Fragment key={i}>
                {this.getDateFormat(value)}
              </React.Fragment>
            )
          })}
        </div>
        {this.props.showErrors && (
          <div className='error-message'>
            {this.state.error}
          </div>
        )}
      </div>
    )
  }
}

SelectDatepicker.defaultProps = {
  value: null,
  showLabels: true,
  showErrors: true,
  format: 'month/day/year',
  className: ''
}

SelectDatepicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  minDate: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  maxDate: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  maxDateMessage: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  minDateMessage: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  invalidMessage: PropTypes.string,
  showLabels: PropTypes.bool,
  showErrors: PropTypes.bool,
  onDateChange: PropTypes.func,
  className: PropTypes.string,
  format: PropTypes.oneOf(
    [
      'day/month/year',
      'day/year/month',
      'month/day/year',
      'month/year/day',
      'year/month/day',
      'year/day/month'
    ]
  ),
  labels: PropTypes.shape({
    year: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string
  }),
  monthNames: PropTypes.arrayOf(PropTypes.string)
}
