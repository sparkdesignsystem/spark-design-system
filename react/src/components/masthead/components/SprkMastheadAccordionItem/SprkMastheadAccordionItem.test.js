/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordionItem from './SprkMastheadAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

it('SprkMastheadAccordionItem: Should display one element with the correct base class', () => {
  const wrapper = mount(<SprkMastheadAccordionItem />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item').length).toBe(1);
});

it('SprkMastheadAccordionItem: Should default to open if defaultOpen is true', () => {
  const wrapper = shallow(<SprkMastheadAccordionItem defaultOpen />);
  expect(wrapper.state().isOpen).toBe(true);
});

it('SprkMastheadAccordionItem: Should toggle the accordion open on click', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem
      text="Item 1"
      subNavLinks={[{ text: 'Item 1' }]}
    />,
  );
  expect(wrapper.state().isOpen).toBe(false);
  wrapper.find('.sprk-c-MastheadAccordion__summary').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.find('.sprk-c-MastheadAccordion__summary').simulate('click');
  expect(wrapper.state().isOpen).toBe(false);
});

it('SprkMastheadAccordionItem: Should render the supplied element', () => {
  const wrapper = mount(<SprkMastheadAccordionItem element="p" />);
  expect(wrapper.find('p.sprk-c-MastheadAccordion__summary').length).toBe(1);
});

it('SprkMastheadAccordionItem: Should render the supplied href', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem
      subNavLinks={[
        { text: 'Item 1', element: 'a', href: 'https://www.google.com' },
      ]}
    />,
  );
  expect(
    wrapper
      .find('.sprk-c-Masthead__link')
      .instance()
      .getAttribute('href'),
  ).toBe('https://www.google.com');
});

it('SprkMastheadAccordionItem: Should render the supplied href as #nogo if not supplied', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem
      subNavLinks={[{ text: 'Item 1', element: 'a' }]}
    />,
  );
  expect(
    wrapper
      .find('.sprk-c-Masthead__link')
      .instance()
      .getAttribute('href'),
  ).toBe('#nogo');
});

it('SprkMastheadAccordionItem: Should not render href if element supplied is not a (subnav)', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem
      subNavLinks={[{ text: 'Item 1', element: 'span' }]}
    />,
  );
  expect(
    wrapper
      .find('.sprk-c-Masthead__link')
      .instance()
      .getAttribute('href'),
  ).toBe(null);
});

it('SprkMastheadAccordionItem: Should not render href if element supplied is not a', () => {
  const wrapper = mount(<SprkMastheadAccordionItem element="span" />);
  expect(
    wrapper
      .find('.sprk-c-MastheadAccordion__summary')
      .instance()
      .getAttribute('href'),
  ).toBe(null);
});

it('SprkMastheadAccordionItem: Should render href as #nogo if element supplied is a and href is not supplied', () => {
  const wrapper = mount(<SprkMastheadAccordionItem element="a" />);
  expect(
    wrapper
      .find('.sprk-c-MastheadAccordion__summary')
      .instance()
      .getAttribute('href'),
  ).toBe('#nogo');
});

it('SprkMastheadAccordionItem: Should render href as supplied value', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem element="a" href="https://www.google.com" />,
  );
  expect(
    wrapper
      .find('.sprk-c-MastheadAccordion__summary')
      .instance()
      .getAttribute('href'),
  ).toBe('https://www.google.com');
});

it('SprkMastheadAccordionItem: Should add a class if isActive is true', () => {
  const wrapper = mount(<SprkMastheadAccordionItem isActive />);
  expect(
    wrapper.find(
      '.sprk-c-MastheadAccordion__item.sprk-c-MastheadAccordion__item--active',
    ).length,
  ).toBe(1);
});

it('SprkMastheadAccordionItem: Should render as add classes if isButton is true', () => {
  const wrapper = mount(<SprkMastheadAccordionItem isButton />);
  expect(
    wrapper.find('.sprk-c-MastheadAccordion__item.sprk-o-Box').length,
  ).toBe(1);
  expect(wrapper.find('span.sprk-c-MastheadAccordion__heading').length).toBe(0);
});

it('SprkMastheadAccordionItem: Should render the right icon if leadingIcon has value', () => {
  const wrapper = mount(<SprkMastheadAccordionItem leadingIcon="settings" />);
  expect(wrapper.find('.sprk-c-Icon > use[xlinkHref="#settings"]').length).toBe(
    1,
  );
});

it('SprkMastheadAccordionItem: Should add aria-expanded="true" when the item is open', () => {
  const wrapper = mount(
    <SprkMastheadAccordionItem
      text="Item 1"
      subNavLinks={[{ text: 'Item 1' }]}
    />,
  );
  expect(wrapper.state().isOpen).toBe(false);
  wrapper.find('.sprk-c-MastheadAccordion__summary').simulate('click');
  expect(wrapper.find('[aria-expanded="true"]').length).toBe(2);
});
