/* global it expect jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordion from './SprkAccordion';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display a ul element with the correct base class', () => {
  const wrapper = mount(
    <SprkAccordion>
      <SprkAccordionItem heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
      <SprkAccordionItem heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
      <SprkAccordionItem heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
    </SprkAccordion>
  );
  expect(wrapper.find('ul.sprk-c-Accordion.sprk-o-VerticalList').length).toBe(1);
});
