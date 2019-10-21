import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CloseButton from './CloseButton';

Enzyme.configure({ adapter: new Adapter() });

it('should load the component', () => {
  const wrapper = mount(<CloseButton />);
  expect(wrapper.find('button.sprk-c-Modal__icon').length).toBe(1);
});
