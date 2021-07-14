import React from 'react';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import '../../utilities/testing/windowStubs';
import SprkStepper from './SprkStepper';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkStepper:', () => {
  it('should display a stepper element with the correct base class', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep />
        <SprkStepperStep />
      </SprkStepper>,
    );
    expect(wrapper.find('ol.sprk-c-Stepper').length).toBe(1);
  });

  it('should correctly apply additional classes', () => {
    const expected = 'expected_class';
    const wrapper = mount(
      <SprkStepper additionalClasses={expected}>
        <SprkStepperStep />
        <SprkStepperStep />
      </SprkStepper>,
    );

    expect(wrapper.find('ol.sprk-c-Stepper').hasClass(expected)).toBe(true);
  });

  it('should correctly apply bookend classes', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep />
        <SprkStepperStep />
        <SprkStepperStep />
      </SprkStepper>,
    );

    expect(wrapper.find('li.sprk-c-Stepper__step').length).toBe(3);
    expect(
      wrapper
        .find('li.sprk-c-Stepper__step')
        .first()
        .hasClass('sprk-c-Stepper__step--first'),
    ).toBe(true);

    expect(
      wrapper
        .find('li.sprk-c-Stepper__step')
        .last()
        .hasClass('sprk-c-Stepper__step--last'),
    ).toBe(true);
  });

  it('should ignore non-step children', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep />
        <SprkStepperStep />
        <div id="foo" />
      </SprkStepper>,
    );

    expect(wrapper.find('div#foo').length).toBe(0);
  });

  it('should call step callback function', () => {
    const expectedFunc = sinon.spy();
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep />
        <SprkStepperStep additionalClasses='foo' onClick={expectedFunc} />
        <SprkStepperStep />
      </SprkStepper>,
    );

    const step = wrapper.find('li.foo');

    step.simulate('click');

    expect(expectedFunc.called).toBe(true);
  });

  it('should have the correct structure with a dark background', () => {
    const expected = 'div.sprk-c-Stepper__container-dark';

    const wrapper = mount(
      <SprkStepper hasDarkBackground>
        <SprkStepperStep />
        <SprkStepperStep />
      </SprkStepper>,
    );

    expect(wrapper.find(expected).length).toBe(1);
  });

  it('should correctly advance the tab when a key is pressed', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' />
        <SprkStepperStep additionalClasses='second' isSelected />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('second')).toBe(true);

    const eventObj = {
      keyCode: 39,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('third')).toBe(true);
  });

  it('should correctly retreat the tab when a key is pressed', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' />
        <SprkStepperStep additionalClasses='second' isSelected />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('second')).toBe(true);

    const eventObj = {
      keyCode: 37,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('first')).toBe(true);
  });

  it('should correctly jump to first step when Home is pressed', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' />
        <SprkStepperStep additionalClasses='second' isSelected />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('second')).toBe(true);

    const eventObj = {
      keyCode: 36,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('first')).toBe(true);
  });

  it('should correctly jump to last step when End is pressed', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' />
        <SprkStepperStep additionalClasses='second' isSelected />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('second')).toBe(true);

    const eventObj = {
      keyCode: 35,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('third')).toBe(true);
  });

  it('should correctly advance and overflow the selected item with keyboard', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' />
        <SprkStepperStep additionalClasses='second' />
        <SprkStepperStep additionalClasses='third' isSelected/>
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('third')).toBe(true);

    const eventObj = {
      keyCode: 39,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('first')).toBe(true);
  });

  it('should correctly retreat and underflow the selected item with keyboard', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' isSelected/>
        <SprkStepperStep additionalClasses='second' />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('first')).toBe(true);

    const eventObj = {
      keyCode: 37,
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('third')).toBe(true);
  });

  it('should not change state for unexpected keypresses', () => {
    const wrapper = mount(
      <SprkStepper>
        <SprkStepperStep additionalClasses='first' isSelected/>
        <SprkStepperStep additionalClasses='second' />
        <SprkStepperStep additionalClasses='third' />
      </SprkStepper>,
    );

    const selectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');

    expect(selectedStep.hasClass('first')).toBe(true);

    const eventObj = {
      keyCode: 110, // decimal point
      preventDefault() {},
    };

    // call the key handle function with eventObj
    wrapper.instance().handleKeyEvents(eventObj);
    wrapper.update();

    const newSelectedStep = wrapper.find('li.sprk-c-Stepper__step--selected');
    expect(newSelectedStep.hasClass('first')).toBe(true);
  });
});
