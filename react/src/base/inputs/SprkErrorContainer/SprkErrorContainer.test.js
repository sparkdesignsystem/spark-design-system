import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkErrorContainer from './SprkErrorContainer';

Enzyme.configure({ adapter: new Adapter() });

let message;

beforeEach(() => {
  message = 'Error Message!';
});

describe('SprkErrorContainer:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkErrorContainer message={message} />);
    expect(wrapper.find('.sprk-b-ErrorContainer').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkErrorContainer message={message} additionalClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-b-ErrorContainer.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkErrorContainer message={message} analyticsString="321" />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(<SprkErrorContainer message={message} />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(
      <SprkErrorContainer message={message} idString="321" />,
    );
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(<SprkErrorContainer message={message} />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign id attribute when id has a value', () => {
    const wrapper = mount(
      <SprkErrorContainer id="test-id" message={message} />,
    );
    expect(
      wrapper.find('.sprk-b-ErrorContainer').getDOMNode().getAttribute('id'),
    ).toBe('test-id');
  });

  it('should assign default id attribute when id has no value', () => {
    const wrapper = mount(<SprkErrorContainer message={message} />);
    expect(
      wrapper.find('.sprk-b-ErrorContainer').getDOMNode().getAttribute('id'),
    ).toContain('sprk-');
  });
});
