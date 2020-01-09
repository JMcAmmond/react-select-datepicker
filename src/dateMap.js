import React from 'react'
import moment from 'moment'

const MONTHMAP = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const getDays = (showLabel, dayLabel) => {
  const days = []

  days.push(<option value='' disabled>{showLabel ? dayLabel || 'Day' : ''}</option>)

  for (let i = 1; i <= 31; i++) {
    days.push(<option value={`${i}`}>{i}</option>)
  }

  return days
}

const getMonths = (showLabel, monthLabel, monthNames) => {
  const months = []

  months.push(<option value='' disabled>{showLabel ? monthLabel || 'Month' : ''}</option>)

  for (let i = 1; i <= 12; i++) {
    months.push(<option value={`${i}`}>{monthNames ? monthNames[i - 1] : MONTHMAP[i]}</option>)
  }

  return months
}

const getYears = (max, min, showLabel, value, yearLabel) => {
  const years = []
  let maxYear
  let minYear

  if (!!max && !!min) {
    // Max and min year
    maxYear = moment(max).year()
    minYear = moment(min).year()
  } else if (!!max && !min) {
    // Only max year
    maxYear = moment(max).year()
    minYear = 1900
  } else if (!max && !!min) {
    // Only min year
    maxYear = moment().year()
    minYear = moment(min).year()
  } else {
    // No max or min
    maxYear = moment(max).year()
    minYear = 1900
  }

  if (value) {
    if (value > maxYear) {
      maxYear = value
    }

    if (value < minYear) {
      minYear = value
    }
  }

  years.push(<option value='' disabled>{showLabel ? yearLabel || 'Year' : ''}</option>)

  for (let i = maxYear; i >= minYear; i--) {
    years.push(<option value={`${i}`}>{i}</option>)
  }

  return years
}

export { getDays, getMonths, getYears }
