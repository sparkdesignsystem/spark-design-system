/* global it expect window document Event */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../utilities/testing/windowStubs';
import SprkMasthead from './SprkMasthead';
import SprkMastheadLittleNav from './components/SprkMastheadLittleNav/SprkMastheadLittleNav';
import SprkMastheadBigNav from './components/SprkMastheadBigNav/SprkMastheadBigNav';
import SprkMastheadNarrowNav from './components/SprkMastheadNarrowNav/SprkMastheadNarrowNav';
import SprkLink from '../../base/links/SprkLink';

Enzyme.configure({ adapter: new Adapter() });

it('SprkMasthead: Should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkMasthead />);
  expect(wrapper.find('header.sprk-c-Masthead').length).toBe(1);
});

it('SprkMasthead: Should add classes if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkMasthead additionalClasses="sprk-u-man" />);
  expect(wrapper.find('header.sprk-u-man').length).toBe(1);
});

it('SprkMasthead: Should add data-analytics if analyticsString has a value', () => {
  const wrapper = shallow(<SprkMasthead analyticsString="masthead-1" />);
  expect(wrapper.find('header[data-analytics="masthead-1"]').length).toBe(1);
});

it('SprkMasthead: Should add data-id if idString has a value', () => {
  const wrapper = shallow(<SprkMasthead idString="masthead-1" />);
  expect(wrapper.find('header[data-id="masthead-1"]').length).toBe(1);
});

it('SprkMasthead: Should toggle classes on html and body and update its own state when the narrow nav is toggled', () => {
  const wrapper = mount(<SprkMasthead />);
  wrapper.find('.sprk-c-Menu').simulate('click');
  expect(wrapper.state().narrowNavOpen).toBe(true);
});

it('SprkMasthead: Should not add height 100 on html if its already there', () => {
  const div = document.createElement('div');
  document.body.append(div);
  document.documentElement.style.height = '100%';
  document.documentElement.setAttribute('class', '');
  mount(<SprkMasthead />, { attachTo: div });
  expect(
    document.documentElement.classList.contains('sprk-u-Height--100'),
  ).toBe(false);
});

it('SprkMasthead: Should not add height 100 on body if its already there', () => {
  const div = document.createElement('div');
  document.body.append(div);
  document.body.style.height = '100%';
  document.body.setAttribute('class', '');
  mount(<SprkMasthead />, { attachTo: div });
  expect(document.body.classList.contains('sprk-u-Height--100')).toBe(false);
});

it('SprkMasthead: Should update state on scroll', () => {
  const wrapper = mount(<SprkMasthead />);
  window.scrollY = 11;
  window.dispatchEvent(new Event('scroll'));
  expect(wrapper.state().isScrolled).toBe(true);
});

it('SprkMasthead: Should update state on scroll to top', () => {
  const wrapper = mount(<SprkMasthead />);
  window.scrollY = 1;
  window.dispatchEvent(new Event('scroll'));
  expect(wrapper.state().isScrolled).toBe(false);
});

it('SprkMasthead: Should update state on orientationchange', () => {
  const wrapper = mount(<SprkMasthead />);
  wrapper.find('.sprk-c-Menu').simulate('click');
  expect(wrapper.state().narrowNavOpen).toBe(true);
  window.dispatchEvent(new Event('orientationchange'));
  expect(wrapper.state().narrowNavOpen).toBe(false);
});

it('SprkMasthead: Should render the little nav if only littleNavLinks are provided', () => {
  const wrapper = mount(<SprkMasthead littleNavLinks={[{ text: 'Hi' }]} />);
  expect(wrapper.find(SprkMastheadLittleNav).length).toBe(1);
});

it('SprkMasthead: Should render the little nav if only utilityContents are provided', () => {
  const wrapper = mount(<SprkMasthead utilityContents={[<p>hi</p>]} />);
  expect(wrapper.find(SprkMastheadLittleNav).length).toBe(1);
});

it('SprkMasthead: Should set spacing appropriately when variant is extended', () => {
  const wrapper = mount(
    <SprkMasthead littleNavLinks={[{ text: 'Hi' }]} variant="extended" />,
  );
  expect(wrapper.find(SprkMastheadLittleNav).props().spacing).toBe('medium');
});

it('SprkMasthead: Should set spacing appropriately', () => {
  const wrapper = mount(<SprkMasthead littleNavLinks={[{ text: 'Hi' }]} />);
  expect(wrapper.find(SprkMastheadLittleNav).props().spacing).toBe('large');
});

it('SprkMasthead: Should render BigNav if bignavlinks is present', () => {
  const wrapper = mount(<SprkMasthead bigNavLinks={[{ text: 'Hi' }]} />);
  expect(wrapper.find(SprkMastheadBigNav).length).toBe(1);
});

it('SprkMasthead: Should render LittleNav if littleNavlinks is present', () => {
  const wrapper = mount(<SprkMasthead littleNavLinks={[{ text: 'Hi' }]} />);
  expect(wrapper.find(SprkMastheadLittleNav).length).toBe(1);
});

it('SprkMasthead: Should render NarrowNav if narrowNavlinks is present', () => {
  const wrapper = mount(<SprkMasthead narrowNavLinks={[{ text: 'Hi' }]} />);
  expect(wrapper.find(SprkMastheadNarrowNav).length).toBe(1);
});

it('SprkMasthead: Should render the correct logoLink if logoLinkElement is an anchor', () => {
  const wrapper = mount(
    <SprkMasthead logoLinkElement="a" logoLink="https://google.com" />,
  );
  expect(wrapper.find(SprkLink).props().href).toBe('https://google.com');
  expect(wrapper.find(SprkLink).props().element).toBe('a');
});

it('SprkMasthead: Should render the correct logoLink if logoLinkElement is router link', () => {
  const wrapper = mount(
    <Router>
      <SprkMasthead logoLinkElement={Link} logoLink="/button" />
    </Router>,
  );
  expect(wrapper.find(SprkLink).props().to).toBe('/button');
  expect(wrapper.find(SprkLink).props().element).toBe(Link);
});

it('SprkMasthead: Should add the hidden class when state isHidden is true', () => {
  const wrapper = mount(<SprkMasthead/>);
  wrapper.setState({ isHidden : true });
  expect(wrapper.find('header.sprk-c-Masthead--hidden').length).toBe(1);
});

it('SprkMasthead: Should update state isHidden to true when scrollDirection is equal to down', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  expect(wrapper.state('isHidden')).toEqual(false);
  wrapper.setState({ scrollDirection : 'down' });
  instance.toggleMenu();
  expect(wrapper.state('isHidden')).toEqual(true);
});

it('SprkMasthead: Should update state isHidden to false when scrollDirection is equal to up', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  wrapper.setState({ isHidden : true });
  expect(wrapper.state('isHidden')).toEqual(true);
  wrapper.setState({ scrollDirection : 'up' });
  instance.toggleMenu();
  expect(wrapper.state('isHidden')).toEqual(false);
});

it('SprkMasthead: Should update narrowNavOpen to false when closeNarrowNavMenu is called', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  wrapper.setState({ narrowNavOpen : true });
  expect(wrapper.state('narrowNavOpen')).toEqual(true);
  instance.closeNarrowNavMenu();
  expect(wrapper.state('narrowNavOpen')).toEqual(false);
});

it('SprkMasthead: Should update state of isNarrowLayout if isNarrowLayout !== newMenuVisibility', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  wrapper.setState({ currentLayout : true });
  wrapper.setState({ isNarrowLayout : false });
  instance.checkIfNarrowLayout();
  expect(wrapper.state('isNarrowLayout')).toEqual(true);
});

it('SprkMasthead: Should update state of isHidden if isNarrowLayout is false', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  wrapper.setState({ currentLayout : false });
  wrapper.setState({ isNarrowLayout : true });
  wrapper.setState({ isHidden : true });
  instance.checkIfNarrowLayout();
  expect(wrapper.state('isHidden')).toEqual(false);
});

it('SprkMasthead: Should call getCurrentLayout when checkLayoutOnResize is called', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  const spy  = jest.spyOn(wrapper.instance(), "getCurrentLayout");
  wrapper.update();
  instance.checkLayoutOnResize();
  expect(spy).toHaveBeenCalled();
});

it('SprkMasthead: Should call checkIfNarrowLayout when checkLayoutOnResize is called', () => {
  const wrapper = mount(<SprkMasthead/>);
  const instance = wrapper.instance();
  const spy  = jest.spyOn(wrapper.instance(), "checkIfNarrowLayout");
  wrapper.update();
  instance.checkLayoutOnResize();
  expect(spy).toHaveBeenCalled();
});

// NOT TESTING REMOVAL OF EVENTLISTENERS ON UNMOUNT
// - There is no functionality in JS to detect the presence of eventlisteners
// - The only way is to use state or variables like attached = true/false
// - Unable to detect state after component has been unmounted
// - Testing unmount function is testing native functionality of react and is redundant
