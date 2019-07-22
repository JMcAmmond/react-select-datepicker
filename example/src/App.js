import React, { Component } from 'react'

import { StyledSelectDatepicker, DateContainer } from './common/select-datepicker'
import { H3, Header } from './common/elements'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      maxValue: new Date(),
      minValue: new Date(1956, 0, 1)
    }
  }

  onDateChange = date => {
    this.setState({
      value: date
    })
  };

  onMaxDateChange = date => {
    this.setState({
      maxValue: date
    })
  };

  onMinDateChange = date => {
    this.setState({
      minValue: date
    })
  };

  render() {
    return (
      <div>
        <Header>React Select Datepicker</Header>

        <H3>Standard</H3>
        <DateContainer>
          <StyledSelectDatepicker
            value={this.state.value}
            onDateChange={this.onDateChange}
          />
        </DateContainer>


      </div>
    )
  }
}
