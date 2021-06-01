import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkHelperText from './SprkHelperText';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkHelperText:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(
      <SprkHelperText>Helper Text for the form field.</SprkHelperText>,
    );

    expect(wrapper.find('.sprk-b-HelperText').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-HelperText').getDOMNode().classList.length,
    ).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkHelperText additionalClasses="sprk-u-man">
        Helper Text for the form field.
      </SprkHelperText>,
    );
    expect(wrapper.find('.sprk-b-HelperText.sprk-u-man').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-HelperText').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkHelperText analyticsString="321">
        Helper Text for the form field.
      </SprkHelperText>,
    );

    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(
      <SprkHelperText>Helper Text for the form field.</SprkHelperText>,
    );

    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(
      <SprkHelperText idString="321">
        Helper Text for the form field.
      </SprkHelperText>,
    );

    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(
      <SprkHelperText>Helper Text for the form field.</SprkHelperText>,
    );

    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign id attribute when id has a value', () => {
    const wrapper = mount(
      <SprkHelperText id="test-id">
        Helper Text for the form field.
      </SprkHelperText>,
    );
    expect(
      wrapper.find('.sprk-b-HelperText').getDOMNode().getAttribute('id'),
    ).toBe('test-id');
  });

  it('should assign default id attribute when id has no value', () => {
    const wrapper = mount(
      <SprkHelperText>Helper Text for the form field.</SprkHelperText>,
    );
    expect(
      wrapper.find('.sprk-b-HelperText').getDOMNode().getAttribute('id'),
    ).toContain('sprk-helper-text-');
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(<SprkHelperText data-my-attr="testing" />);
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });

  it('should add forwardedRef to the checkbox item', () => {
    // Create ref
    const forwardedRef = React.createRef();
    // Add ref as prop
    const wrapper = mount(<SprkHelperText forwardedRef={forwardedRef} />);
    // Use ref to set an attribute
    forwardedRef.current.setAttribute('data-test', 'testing');
    // Check that mounted component received attribute
    expect(
      wrapper.find('.sprk-b-HelperText').getDOMNode().getAttribute('data-test'),
    ).toBe('testing');
  });
});
