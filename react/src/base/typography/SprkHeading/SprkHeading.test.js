/* global Enzyme shallow Adapter it expect */
import React from 'react';
import SprkHeading from './SprkHeading';
import SprkLink from '../../links/SprkLink';

describe('SprkHeading:', () => {
  it('should display h1 element with the display one style class', () => {
    const wrapper = shallow(<SprkHeading element="h1" variant="one">Heading</SprkHeading>);
    expect(wrapper.find('h1.sprk-b-TypeDisplayOne').length).toBe(1);
  });

  it('should add the type display seven class to the SprkLink', () => {
    const wrapper = mount(
      <SprkHeading
        element={SprkLink}
        variant="seven"
      >
        Heading
      </SprkHeading>
    );
    expect(wrapper.find(SprkLink).length).toBe(1);
    expect(wrapper.find('a.sprk-b-TypeDisplaySeven').length).toBe(1);
  });

  it('should display h3 element with the display three style class', () => {
    const wrapper = shallow(<SprkHeading element="h3" variant="three">Heading</SprkHeading>);
    expect(wrapper.find('h3.sprk-b-TypeDisplayThree').length).toBe(1);
  });

  it('should display h6 element with the display six style class and the page title class', () => {
    const wrapper = shallow(
      <SprkHeading
        element="h6"
        variant="six"
        isPageTitle>
          Heading
      </SprkHeading>
    );
    expect(wrapper.find('h6.sprk-b-TypeDisplaySix').length).toBe(1);
    expect(wrapper.find('h6.sprk-b-PageTitle').length).toBe(1);
  });

  it('should add my-heading as the value for the data-id attribute', () => {
    const wrapper = mount(
      <SprkHeading
        element="h2"
        variant="four"
        idString="my-heading">
          Heading
      </SprkHeading>
    );
    expect(
      wrapper
        .find('h2.sprk-b-TypeDisplayFour')
        .length).toBe(1);
    expect(
      wrapper
        .find('h2.sprk-b-TypeDisplayFour')
        .getDOMNode()
        .getAttribute('data-id'))
      .toBe('my-heading');
  });
});
