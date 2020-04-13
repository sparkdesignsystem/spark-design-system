/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordionItem from './SprkMastheadAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkMastheadAccordionItem:', () => {
  it('should display one element with the correct base class', () => {
    const wrapper = mount(<SprkMastheadAccordionItem />);
    expect(wrapper.find('.sprk-c-MastheadAccordion__item').length).toBe(1);
  });

  it('should default to open if defaultOpen is true', () => {
    const wrapper = shallow(<SprkMastheadAccordionItem defaultOpen />);
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should toggle the accordion open on click', () => {
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

  it('should render the supplied element', () => {
    const wrapper = mount(<SprkMastheadAccordionItem element="p" />);
    expect(wrapper.find('p.sprk-c-MastheadAccordion__summary').length).toBe(1);
  });

  it('should render the supplied href', () => {
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

  it('should render the supplied href as #nogo if not supplied', () => {
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

  it('should not render href if element supplied is not a (subnav)', () => {
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

  it('should not render href if element supplied is not a', () => {
    const wrapper = mount(<SprkMastheadAccordionItem element="span" />);
    expect(
      wrapper
        .find('.sprk-c-MastheadAccordion__summary')
        .instance()
        .getAttribute('href'),
    ).toBe(null);
  });

  it('should render href as #nogo if element supplied is a and href is not supplied', () => {
    const wrapper = mount(<SprkMastheadAccordionItem element="a" />);
    expect(
      wrapper
        .find('.sprk-c-MastheadAccordion__summary')
        .instance()
        .getAttribute('href'),
    ).toBe('#nogo');
  });

  it('should render href as supplied value', () => {
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

  it('should add a class if isActive is true', () => {
    const wrapper = mount(<SprkMastheadAccordionItem isActive />);
    expect(
      wrapper.find(
        '.sprk-c-MastheadAccordion__item.sprk-c-MastheadAccordion__item--active',
      ).length,
    ).toBe(1);
  });

  it('should render as add classes if isButton is true', () => {
    const wrapper = mount(<SprkMastheadAccordionItem isButton />);
    expect(
      wrapper.find('.sprk-c-MastheadAccordion__item.sprk-o-Box').length,
    ).toBe(1);
    expect(wrapper.find('span.sprk-c-MastheadAccordion__heading').length).toBe(0);
  });

  it('should render the right icon if leadingIcon has value', () => {
    const wrapper = mount(<SprkMastheadAccordionItem leadingIcon="settings" />);
    expect(wrapper.find('.sprk-c-Icon > use[xlinkHref="#settings"]').length).toBe(
      1,
    );
  });

  it('should add aria-expanded="true" when the item is open', () => {
    const wrapper = mount(
      <SprkMastheadAccordionItem
        text="Item 1"
        subNavLinks={[{ text: 'Item 1' }]}
      />,
    );
    expect(wrapper.state().isOpen).toBe(false);
    wrapper.find('.sprk-c-MastheadAccordion__summary').simulate('click');
    expect(wrapper.find('[aria-expanded="true"]').length).toBe(1);
  });

  it('should add aria-controls and id to narrowNav if narrowNavId is not passed', () => {
    const wrapper = mount(
      <SprkMastheadAccordionItem
        text="Item 1"
        subNavLinks={[{ text: 'Item 1' }]}
      />,
    );

    const menuItemToggle = wrapper.find('.sprk-c-MastheadAccordion__summary');
    menuItemToggle.simulate('click');

    const menuItemContent = wrapper.find('.sprk-c-MastheadAccordion__details');
    const menuItemContentId = menuItemContent.getDOMNode().getAttribute('id');
    const menuItemToggleAriaControls = menuItemToggle.getDOMNode().getAttribute('aria-controls');

    expect(menuItemContentId).toMatch(/sprk_accordion_item_\d/);
    expect(menuItemToggleAriaControls).toEqual(menuItemContentId);
  });

  it('should add correct aria-controls and id to narrowNav if narrowNavId is passed', () => {
    const testItemId = "test12345";
    const wrapper = mount(
      <SprkMastheadAccordionItem
        text="Item 1"
        itemId={testItemId}
        subNavLinks={[{ text: 'Item 1'}]}
      />,
    );

    const menuItemToggle = wrapper.find('.sprk-c-MastheadAccordion__summary');
    const menuItemContent = wrapper.find('.sprk-c-MastheadAccordion__details');
    const menuItemContentId = menuItemContent.getDOMNode().getAttribute('id');
    const menuItemToggleAriaControls = menuItemToggle.getDOMNode().getAttribute('aria-controls');

    expect(menuItemContentId).toEqual(testItemId);
    expect(menuItemToggleAriaControls).toEqual(testItemId);
  });


});
