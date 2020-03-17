import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlagFigure from './SprkFlagFigure';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlagFigure:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlagFigure />
    );
    expect(wrapper.hasClass('sprk-o-Flag__figure')).toBe(true);
  });

  it('should apply additional classes', () => {
    const testClass = "test";
    const wrapper = shallow(
      <SprkFlagFigure additionalClasses={testClass} />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('should apply idString', () => {
    const testId = "test";
    const wrapper = mount(
      <SprkFlagFigure idString={testId}/>
    );
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });
});
