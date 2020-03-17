import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlag from './SprkFlag';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlag:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlag />
    );
    expect(wrapper.hasClass('sprk-o-Flag')).toBe(true);
    expect(wrapper.hasClass('sprk-o-Flag--stacked')).toBe(true);
  });

  it('should apply additional classes', () => {
    const testClass = "test";
    const wrapper = shallow(
      <SprkFlag additionalClasses={testClass} />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('should apply idString', () => {
    const testId = "test";
    const wrapper = mount(
      <SprkFlag idString={testId}/>
    );
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });
});
