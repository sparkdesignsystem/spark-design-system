import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkInputContainer from './SprkInputContainer';
import SprkLabel from '../SprkLabel/SprkLabel';
import SprkInput from '../SprkInput/SprkInput';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkInputContainer:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkInputContainer />);
    expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
  });

  it('should render a huge text input container with the correct class', () => {
    const wrapper = mount(<SprkInputContainer variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkInputContainer additionalClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkInputContainer analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkInputContainer idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should set for value of label to match input id if mismatching', () => {
    const wrapper = mount(
      <SprkInputContainer>
        <SprkLabel htmlFor="testFor">Mismatching Values</SprkLabel>
        <SprkInput id="testID" />
      </SprkInputContainer>,
    );
    expect(wrapper.find('label').getDOMNode().htmlFor).toBe('testID');

    const customFor = mount(
      <SprkInputContainer>
        <SprkLabel>With custom for</SprkLabel>
        <SprkInput id="testID" />
      </SprkInputContainer>,
    );
    expect(customFor.find('label').getDOMNode().htmlFor).toBe('testID');

    const customID = mount(
      <SprkInputContainer>
        <SprkLabel htmlFor="testFor">Input has custom ID</SprkLabel>
        <SprkInput />
      </SprkInputContainer>,
    );
    expect(customID.find('label').getDOMNode().htmlFor).toBe(
      customID.find('input').getDOMNode().id,
    );

    const bothCustom = mount(
      <SprkInputContainer>
        <SprkLabel>Input has custom ID</SprkLabel>
        <SprkInput />
      </SprkInputContainer>,
    );
    expect(bothCustom.find('label').getDOMNode().htmlFor).toBe(
      bothCustom.find('input').getDOMNode().id,
    );
  });

  it(`
    should match the aria-describedby on the
    input with the error container id if error
    container present`, () => {
    const wrapper = mount(
      <SprkInputContainer>
        <SprkLabel htmlFor="invalid-input">Invalid Input</SprkLabel>
        <SprkInput id="invalid-input" />
        <SprkErrorContainer
          id="test-error"
          message="There is an error on this field."
        >
          Need to update this test once error container is updated to
          compositional.
        </SprkErrorContainer>
      </SprkInputContainer>,
    );
    expect(
      wrapper.find('input').getDOMNode().getAttribute('aria-describedby'),
    ).toBe('test-error');

    const userSuppliedAria = mount(
      <SprkInputContainer>
        <SprkLabel htmlFor="invalid-input">Invalid Input</SprkLabel>
        <SprkInput id="invalid-input" ariaDescribedBy="user-supplied" />
        <SprkErrorContainer
          id="test-error"
          message="There is an error on this field."
        >
          Need to update this test once error container is updated to
          compositional.
        </SprkErrorContainer>
      </SprkInputContainer>,
    );
    expect(
      userSuppliedAria
        .find('input')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error');
  });

  it('should allow other elements to be passed through', () => {
    const wrapper = mount(
      <SprkInputContainer>
        <SprkLabel htmlFor="testFor">Mismatching Values</SprkLabel>
        <SprkInput id="testID" />
        <p>Additional Information Passed</p>
      </SprkInputContainer>,
    );
    expect(wrapper.find('p').length).toBe(1);
  });
});
