import React from 'react';
import { shallow } from 'enzyme';
import SelectDatepicker from '../index';

describe('ExampleComponent', () => {
  const changeSpy = jest.fn();
  const component = shallow(
    <SelectDatepicker value={new Date(4, 6, 2000)} onDateChange={changeSpy} />,
  );
  it('should exist', () => {
    expect(component.exists).toBeTruthy();
  });
});
