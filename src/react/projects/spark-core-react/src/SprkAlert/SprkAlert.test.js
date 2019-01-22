import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAlert from './SprkAlert';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkAlert/>);
  expect(wrapper.find('div.sprk-c-Alert').length).toBe(1);
});
