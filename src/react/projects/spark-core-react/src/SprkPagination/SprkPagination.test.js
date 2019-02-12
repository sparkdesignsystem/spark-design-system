import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkPagination from './SprkPagination';

Enzyme.configure({ adapter: new Adapter() });

it('should display a pagination element with the correct base class', () => {
    const wrapper = shallow(<SprkPagination/>);

    const nav = wrapper.find('nav');
    expect(nav.length).toBe(1);

    const ul = nav.find('ul');
    expect(ul.length).toBe(1);
    expect(ul.hasClass('sprk-c-Pagination')).toBe(true);
});

it('should render with two chevrons in any variant', () => {
    const wrapper = mount(<SprkPagination/>);

    const chevronLinks = wrapper.find('li a.sprk-c-Pagination__icon');
    expect(chevronLinks.length).toBe(2);
});

// calculates the correct number of pages

// applies current page correctly