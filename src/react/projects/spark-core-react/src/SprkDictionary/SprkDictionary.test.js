import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDictionary from './SprkDictionary';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div with the correct base class', () => {
  const wrapper = shallow(<SprkDictionary/>);
  expect(wrapper.find('div').hasClass('sprk-c-Dictionary')).toBe(true);
});

it('should display a striped dictionary with correct classes when variant is striped', () => {
  const wrapper = shallow(<SprkDictionary variant="striped" />);
  expect(wrapper.find('div').hasClass('sprk-c-Dictionary')).toBe(true);
  expect(wrapper.find('div').hasClass('sprk-c-Dictionary--striped')).toBe(true);
});