import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import SprkModal from './SprkModal';

Enzyme.configure({ adapter: new Adapter() });

it('should load the module', () => {
  const wrapper = shallow(<SprkModal isVisible />);
  expect(wrapper.find('div.sprk-c-Modal').length).toBe(1);
});

it('should not render an invisible component', () => {
  const wrapper = mount(<SprkModal isVisible={false} />);
  expect(wrapper.find('div.sprk-c-Modal').length).toBe(0);
});

it('should have 3 buttons in the Choice variant', () => {
  const wrapper = mount(<SprkModal isVisible />);
  expect(wrapper.find('button').length).toBe(3);
});

it('should have 1 button in the Info variant', () => {
  const wrapper = mount(<SprkModal isVisible variant="info" />);
  expect(wrapper.find('button').length).toBe(1);
});

it('should have 0 buttons in the Wait variant', () => {
  const wrapper = mount(<SprkModal isVisible variant="wait" />);
  expect(wrapper.find('button').length).toBe(0);
});

it('should correctly apply the title property', () => {
  const expected = 'TitleText';
  const wrapper = mount(<SprkModal isVisible title={expected} />);
  const actual = wrapper.find('h2.sprk-c-Modal__heading').text();

  expect(actual).toEqual(expected);
});

it('should correctly apply additional classes', () => {
  const expected = 'sampleClass';
  const wrapper = mount(<SprkModal isVisible additionalClasses={expected} />);
  const actual = wrapper.find('div.sprk-c-Modal');

  expect(actual.hasClass(expected)).toBe(true);
});

// it('should accept key events', () => {
// const cancelFunc = sinon.spy();
// const wrapper = mount(<SprkModal isVisible={true} cancelClick={cancelFunc} />);
// const modal = wrapper.find('div.sprk-c-Modal');

// modal.simulate('keydown', { keyCode: 27 }); // escape
// expect(cancelFunc.called).toBe(true);

// });

// setting focus

// focus trapping
