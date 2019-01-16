import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkButton from './SprkButton';

Enzyme.configure({ adapter: new Adapter() });

it('should display a button element with the correct base class', () => {
  const wrapper = shallow(<SprkButton/>);
  expect(wrapper.find('button.sprk-c-Button').length).toBe(1);
});

it('should display a button element with correct classes when buttonType is secondary', () => {
  const wrapper = shallow(<SprkButton buttonType="secondary" />);
  expect(wrapper.find('button').hasClass('sprk-c-Button--secondary')).toBe(true);
});
