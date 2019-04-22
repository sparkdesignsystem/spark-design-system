import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../matchMedia';
import SprkModal from './SprkModal';
import Mask from './Mask';
import ModalFooter from './ModalFooter';
import CloseButton from './CloseButton';

Enzyme.configure({ adapter: new Adapter() });

it('should load the module', () => {
  const wrapper = shallow(<SprkModal isVisible={true} />);
  expect(wrapper.find('div.sprk-c-Modal').length).toBe(1);
});

it('should have 3 buttons in the Choice variant', () => {
  const wrapper = mount(<SprkModal isVisible={true} />);
  expect(wrapper.find('button').length).toBe(3);
});

it('should have 1 button in the Info variant', () => {
  const wrapper = mount(<SprkModal isVisible={true} variant="info" />);
  expect(wrapper.find('button').length).toBe(1);
});

it('should have 0 buttons in the Wait variant', () => {
  const wrapper = mount(<SprkModal isVisible={true} variant="wait" />);
  expect(wrapper.find('button').length).toBe(0);
});

it('should correctly apply the title property', () => {
  let expected = 'TitleText';
  const wrapper = mount(<SprkModal isVisible={true} title={expected} />);
  const actual = wrapper.find('h2.sprk-c-Modal__heading').text();

  expect(actual).toEqual(expected);
});

it('should correctly apply additional classes', () => {
  let expected = 'sampleClass';
  const wrapper = mount(<SprkModal isVisible={true} additionalClasses={expected} />);
  const actual = wrapper.find('div.sprk-c-Modal');

  expect(actual.hasClass(expected)).toBe(true);
});

// Mask tests
it('should render a Mask with the correct class', () => {
  const wrapper = mount(<Mask />);

  expect(wrapper.find('div.sprk-c-ModalMask').length).toBe(1);
});

it('should correctly apply focus in choice variant', () => {
  const wrapper = mount(<SprkModal isVisible={true} confirmText='foo'/>);
  const confirmButton = wrapper.find('button').at(1);

  expect(confirmButton.text()).toBe('foo');
  expect(confirmButton).toEqual(document.activeElement);
});

// setting focus

// focus trapping
