import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalFooter from './ModalFooter';

Enzyme.configure({ adapter: new Adapter() });

it('should load the component', () => {
  const wrapper = mount(<ModalFooter />);
  expect(wrapper.find('footer.sprk-o-Stack__item').length).toBe(1);
});
