import moment from 'moment'

/**
 * Determine id provided date is a valid date and falls between date range
 * @param {string} day
 * @param {string} month
 * @param {string} year
 * @param {object} props
 */
const isValidDate = (day, month, year, props) => {
  const userDate = buildDateFromInput(day, month, year)

  // Must be a valid date
  if (!userDate.isValid()) {
    return props.invalidMessage || 'Not a valid date'
  }

  // Must be same or before max date
  if (props.maxDate) {
    const maxDate = buildDateFromDate(props.maxDate)
    if (!userDate.isSameOrBefore(maxDate)) {
      return props.maxDateMessage || 'Date must be less than ' + maxDate.add(1, 'day').format('MMMM Do, YYYY')
    }
  }

  // Must be same or after min date
  if (props.minDate) {
    const minDate = buildDateFromDate(props.minDate)
    if (!userDate.isSameOrAfter(minDate)) {
      return props.minDateMessage || 'Date must be greater than ' + minDate.subtract(1, 'day').format('MMMM Do, YYYY')
    }
  }

  return ''
}

/**
 * Build a moment date from input
 * @param {string} day
 * @param {string} month
 * @param {string} year
 */
const buildDateFromInput = (day, month, year) => {
  const date = moment(`${day}/${month}/${year}`, 'D/M/YYYY', true)
  return date
}

/**
 * Build a moment date from date object
 * @param {Date} date
 */
const buildDateFromDate = date => {
  const newDate = moment(date)
  return newDate
}

export { isValidDate, buildDateFromInput }
