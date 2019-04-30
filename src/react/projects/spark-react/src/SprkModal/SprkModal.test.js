import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import '../windowStubs';
import SprkModal from './SprkModal';

Enzyme.configure({ adapter: new Adapter() });

it('should load the module', () => {
  const wrapper = shallow(<SprkModal isVisible={true} />);
  expect(wrapper.find('div.sprk-c-Modal').length).toBe(1);
});

it ('should not render an invisible component', () => {
  const wrapper = mount(<SprkModal isVisible={false} />);
  expect(wrapper.find('div.sprk-c-Modal').length).toBe(0);
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

it('should call the cancelClick callback when the Close button is clicked', () => {
  const cancelFunc = sinon.spy();
  const wrapper = mount(<SprkModal isVisible={true} cancelClick={cancelFunc} />);

  const closeButton = wrapper.find('button.sprk-c-Modal__icon');

  closeButton.simulate('click');

  expect(cancelFunc.called).toBe(true);
});

it('should call the confirmClick callback when the confirm button is clicked', () => {
  const confirmFunc = sinon.spy();
  const wrapper = mount(<SprkModal isVisible={true} confirmClick={confirmFunc} />);

  const confirmButton = wrapper.find('footer button.sprk-c-Button').first();

  confirmButton.simulate('click');

  expect(confirmFunc.called).toBe(true);
});

// it('should call the cancel callback when Escape is pressed.', () => {
  // const cancelFunc = jest.fn();
  // const wrapper = mount(<SprkModal variant={'choice'} isVisible={true} cancelClick={cancelFunc} />).find('.sprk-c-Button').first();
  // // expect(wrapper.length).toBe(1);

  // wrapper.simulate('keydown', { keyCode: 27 });

  // expect(cancelFunc).toHaveBeenCalled();


  // const wrapper = mount(
  //   <SprkTabs>
  //     <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
  //     <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
  //   </SprkTabs>,
  // );
  // // First, tab into the Tab Button area
  // wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 9 });
  // wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 37 });
  // const button = wrapper.find(SprkTabsButton).first();
  // expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
// });