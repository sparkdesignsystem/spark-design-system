import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextareaContainer from './SprkTextareaContainer';
import SprkLabel from '../SprkLabel/SprkLabel';
import SprkTextarea from '../SprkTextarea/SprkTextarea';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTextareaContainer:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkTextareaContainer />);
    expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkTextareaContainer additionalClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkTextareaContainer analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(<SprkTextareaContainer />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkTextareaContainer idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(<SprkTextareaContainer />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should set for value of label to match input id if mismatching', () => {
    const wrapper = mount(
      <SprkTextareaContainer>
        <SprkLabel htmlFor="testFor">Mismatching Values</SprkLabel>
        <SprkTextarea id="testID" />
      </SprkTextareaContainer>,
    );
    expect(wrapper.find('label').getDOMNode().htmlFor).toBe('testID');

    const customFor = mount(
      <SprkTextareaContainer>
        <SprkLabel>With custom for</SprkLabel>
        <SprkTextarea id="testID" />
      </SprkTextareaContainer>,
    );
    expect(customFor.find('label').getDOMNode().htmlFor).toBe('testID');

    const customID = mount(
      <SprkTextareaContainer>
        <SprkLabel htmlFor="testFor">Textarea has custom ID</SprkLabel>
        <SprkTextarea />
      </SprkTextareaContainer>,
    );
    expect(customID.find('label').getDOMNode().htmlFor).toBe(
      customID.find('textarea').getDOMNode().id,
    );

    const bothCustom = mount(
      <SprkTextareaContainer>
        <SprkLabel>Textarea has custom ID</SprkLabel>
        <SprkTextarea />
      </SprkTextareaContainer>,
    );
    expect(bothCustom.find('label').getDOMNode().htmlFor).toBe(
      bothCustom.find('textarea').getDOMNode().id,
    );
  });

  it(`
    should match the aria-describedby on the
    textarea with the error container id if error
    container present`, () => {
    const wrapper = mount(
      <SprkTextareaContainer>
        <SprkLabel htmlFor="invalid-input">Invalid Textarea</SprkLabel>
        <SprkTextarea id="invalid-input" />
        <SprkErrorContainer
          id="test-error"
          message="There is an error on this field."
        >
          Need to update this test once error container is updated to
          compositional.
        </SprkErrorContainer>
      </SprkTextareaContainer>,
    );
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-describedby'),
    ).toBe('test-error');

    const userSuppliedAria = mount(
      <SprkTextareaContainer>
        <SprkLabel htmlFor="invalid-input">Invalid Textarea</SprkLabel>
        <SprkTextarea id="invalid-input" ariaDescribedBy="user-supplied" />
        <SprkErrorContainer
          id="test-error"
          message="There is an error on this field."
        >
          Need to update this test once error container is updated to
          compositional.
        </SprkErrorContainer>
      </SprkTextareaContainer>,
    );
    expect(
      userSuppliedAria
        .find('textarea')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error');
  });

  it('should allow other elements to be passed through', () => {
    const wrapper = mount(
      <SprkTextareaContainer>
        <SprkLabel htmlFor="testFor">Mismatching Values</SprkLabel>
        <SprkTextarea id="testID" />
        <p>Additional Information Passed</p>
      </SprkTextareaContainer>,
    );
    expect(wrapper.find('p').length).toBe(1);
  });
});
