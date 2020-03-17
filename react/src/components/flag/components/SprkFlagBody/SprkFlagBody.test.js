import React from 'react';
import Enzyme, { shallow, mount, debug } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlagBody from './SprkFlagBody';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlagBody:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlagBody />
    );
    expect(wrapper.hasClass('sprk-o-Flag__body')).toBe(true);
  });

  it('should apply additional classes', () => {
    const testClass = "test";
    const wrapper = shallow(
      <SprkFlagBody additionalClasses={testClass} />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('should apply idString', () => {
    const testId = "test";
    const wrapper = mount(
      <SprkFlagBody idString={testId} />
    );
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });
});
