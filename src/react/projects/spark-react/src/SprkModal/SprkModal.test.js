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

it('should call the cancel callback when cancel is clicked.', () => {
  const cancelFunc = jest.fn();
  const wrapper = mount(<SprkModal variant={'choice'} isVisible={true} cancelClick={cancelFunc} />);
  expect(wrapper.find('.sprk-c-Button--tertiary').length).toBe(1);

  wrapper.find('.sprk-c-Button--tertiary').simulate('click');

  expect(cancelFunc).toHaveBeenCalled();
});

it('should rollover focus in the focus trap.', () => {
  const wrapper = mount(<SprkModal variant={'choice'} isVisible={true} >test</SprkModal>);

  // put focus on the cancel button
  const cancelButton = wrapper.instance().buttonRef;
  // cancelButton.focus();

  // assert that focus is on the cancel button


  // press tab - Enzyme doesn't support event propagation so we need to call the
  // handler directly rather than just simulating the event with .simulate
  // wrapper.instance().handleKeyEvents(
  //   {
  //     keyCode: 9,
  //     preventDefault: function() {}
  //   }
  // );

  // assert that focus is on the close button

});

it('handles tab focus correctly in wait modal', () => {
  const wrapper = mount(<SprkModal variant={'wait'} isVisible={true} />);
  const elem = document.activeElement;

  wrapper.instance().handleKeyEvents(
    {
      keyCode: 9,
      preventDefault: function() {}
    }
  );

  const focusedElement = document.activeElement;

  // the focused element should not have changed when Tab was pressed
  expect(elem === focusedElement).toBe(true);
});

it('should call the cancel callback when escape is pressed.', () => {
  // const cancelFunc = jest.fn();
  // const wrapper = mount(<SprkModal variant={'choice'} isVisible={true} cancelClick={cancelFunc} />);

  // wrapper.instance().handleKeyEvents(
  //   {
  //     keyCode: 27,
  //     preventDefault: function() {}
  //   }
  // );

  // expect(cancelFunc).toHaveBeenCalled();
});