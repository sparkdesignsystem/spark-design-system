import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFieldError from './SprkFieldError';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFieldError:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(
      <SprkFieldError id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('.sprk-b-ErrorContainer').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-ErrorContainer').getDOMNode().classList.length,
    ).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkFieldError additionalClasses="sprk-u-man" id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('.sprk-b-ErrorContainer.sprk-u-man').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-ErrorContainer').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkFieldError analyticsString="321" id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(
      <SprkFieldError id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(
      <SprkFieldError idString="321" id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(
      <SprkFieldError id="error-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );

    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign id attribute when id has a value', () => {
    const wrapper = mount(
      <SprkFieldError id="test-id">
        <div className="sprk-b-ErrorText">There is an error on this field.</div>
      </SprkFieldError>,
    );
    expect(
      wrapper.find('.sprk-b-ErrorContainer').getDOMNode().getAttribute('id'),
    ).toBe('test-id');
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(
      <SprkFieldError data-my-attr="testing" id="error-id" />,
    );
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });

  it('should add forwardedRef to the error container', () => {
    // Create ref
    const forwardedRef = React.createRef();
    // Add ref as prop
    const wrapper = mount(
      <SprkFieldError forwardedRef={forwardedRef} id="error-id" />,
    );
    // Use ref to set an attribute
    forwardedRef.current.setAttribute('data-test', 'testing');
    // Check that mounted component received attribute
    expect(
      wrapper
        .find('.sprk-b-ErrorContainer')
        .getDOMNode()
        .getAttribute('data-test'),
    ).toBe('testing');
  });
});
