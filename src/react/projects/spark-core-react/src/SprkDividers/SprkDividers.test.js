import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLink from './SprkLink';

Enzyme.configure({ adapter: new Adapter() });

it('should display a span element with the correct base class', () => {
  const wrapper = shallow(<SprkLink/>);
  expect(wrapper.find('span.sprk-c-Dividers').length).toBe(1);
});