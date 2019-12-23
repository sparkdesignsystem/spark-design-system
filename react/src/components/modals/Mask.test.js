import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mask from './Mask';

Enzyme.configure({ adapter: new Adapter() });

it('Mask: Should load the component', () => {
  const wrapper = mount(<Mask />);
  expect(wrapper.find('div.sprk-c-ModalMask').length).toBe(1);
});
