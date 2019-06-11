import React from 'react';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
// import '../windowStubs';
import SprkCarouselStep from './SprkCarouselStep';
// import SprkStepper from './SprkStepper';
// import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a carousel element with the correct base class', () => {
  const wrapper = mount(
    <SprkCarouselStep />,
  );

  expect(wrapper.find('li.sprk-c-Carousel__frame-item').length).toBe(1);
});
