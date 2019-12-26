/* global it expect jest */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkPagination from './SprkPagination';
import SprkIcon from '../../components/icons/SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkPagination:', () => {
  it('should display a pagination element with the correct base class', () => {
    const wrapper = shallow(
      <SprkPagination
        totalItems={0}
        itemsPerPage={0}
        onChangeCallback={() => {}}
      />,
    );

    const nav = wrapper.find('nav');
    expect(nav.length).toBe(1);

    const ul = nav.find('ul');
    expect(ul.length).toBe(1);
    expect(ul.hasClass('sprk-c-Pagination')).toBe(true);
  });

  it('should render with exactly two chevrons in any variant', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={0}
        itemsPerPage={0}
        onChangeCallback={() => {}}
      />,
    );

    const chevronLinks = wrapper.find('li a.sprk-c-Pagination__icon');
    expect(chevronLinks.length).toBe(2);
  });

  it('should calculate the correct number of pages in the default variant', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={() => {}}
      />,
    );

    const pageLinks = wrapper.find('li a.sprk-c-Pagination__link');
    expect(pageLinks.length).toBe(3);
  });

  it('applies current page correctly in the default variant', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={() => {}}
        currentPage={2}
      />,
    );

    const currentPageLink = wrapper.find('li a.sprk-c-Pagination__link--current');
    expect(currentPageLink.length).toBe(1);
    expect(currentPageLink.text()).toEqual('2');
  });

  it('renders three numbered pages and no ellipses with 3 or fewer pages', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={() => {}}
      />,
    );

    const paginationItems = wrapper.find('li');
    expect(paginationItems.length).toBe(5); // < 1 2 3 >
    expect(paginationItems.find('a.sprk-c-Pagination__icon').length).toBe(2); // two chevrons
    expect(paginationItems.find('a.sprk-c-Pagination__link').length).toBe(3); // three pages
    expect(paginationItems.findWhere(x => x.text() === '...').length).toBe(0); // zero ellipses
  });

  it('renders ellipses with more than 3 pages', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={3}
        onChangeCallback={() => {}}
      />,
    );

    const paginationItems = wrapper.find('li');
    expect(paginationItems.length).toBe(7); // < 1 ... 3 ... 5 >
    expect(paginationItems.find('a.sprk-c-Pagination__icon').length).toBe(2); // two chevrons
    expect(paginationItems.find('a.sprk-c-Pagination__link').length).toBe(3); // three pages
    expect(paginationItems.findWhere(x => x.type() === 'li' && x.text() === '...').length).toBe(2); // two ellipses
  });

  it('navigates back one page when you click the first chevron', () => {
    const spyFunc = jest.fn();
    const currentPage = 3;

    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={currentPage}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__icon').first().simulate('click');
    expect(spyFunc.mock.calls.length).toBe(1);
    expect(spyFunc.mock.calls[0][0].newPage).toBe(currentPage - 1);
  });

  it('navigates forward one page when you click the last chevron', () => {
    const spyFunc = jest.fn();
    const currentPage = 3;

    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={currentPage}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__icon').last().simulate('click');
    expect(spyFunc.mock.calls.length).toBe(1);
    expect(spyFunc.mock.calls[0][0].newPage).toBe(currentPage + 1);
  });

  it('goes to hard-coded page 1 when you click 1', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__link').findWhere(x => x.type() === 'a' && x.text() === '1').simulate('click');
    // first param of the first call
    expect(spyFunc.mock.calls[0][0].newPage).toBe(1); // expect it to have "1" as arg.newPage
  });

  it('goes to hard-coded page 2 when you click 2', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__link').findWhere(x => x.type() === 'a' && x.text() === '2').simulate('click');
    // first param of the first call
    expect(spyFunc.mock.calls[0][0].newPage).toBe(2); // expect it to have "2" as arg.newPage
  });

  it('goes to hard-coded page 3 when you click 3', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={30}
        itemsPerPage={10}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__link').findWhere(x => x.type() === 'a' && x.text() === '3').simulate('click');
    // first param of the first call
    expect(spyFunc.mock.calls[0][0].newPage).toBe(3); // expect it to have "3" as arg.newPage
  });

  it('goes to last page when you click last page', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={90}
        currentPage={9}
        itemsPerPage={10}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.findWhere((x) => {return x.type() == "a" && x.text() === "9"}).simulate('click');
    // first param of the first call
    expect(spyFunc.mock.calls[0][0].newPage).toBe(9); // expect it to have "9" as arg.newPage
  });

  it('goes to page X when you click X', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={3}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.findWhere((x) => { return x.type() == "a" && x.text() === "3"}).simulate('click');
    // first param of the first call
    expect(spyFunc.mock.calls[0][0].newPage).toBe(3); // expect it to have "3" as arg.newPage
  });

  it('should navigate to the last page when you click next on the last page', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={5}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__icon').last().simulate('click');
    expect(spyFunc.mock.calls[0][0].newPage).toBe(5);
  });

  it('should navigate to the first page when you click prev on the first page', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onChangeCallback={spyFunc}
      />,
    );
    wrapper.find('a.sprk-c-Pagination__icon').first().simulate('click');
    expect(spyFunc.mock.calls[0][0].newPage).toBe(1);
  });

  it('should add analytics strings to page links', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        onChangeCallback={() => {}}
        analyticsStringPage='foo'
      />,
    );

    const pageLinks = wrapper.find('a.sprk-c-Pagination__link');
    expect(pageLinks.every('[data-analytics="foo"]')).toBe(true);
  });

  it('should render the correct prevIcon name if one is passed', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        onChangeCallback={() => {}}
        prevIcon="iconName"
      />,
    );
    expect(wrapper.find(SprkIcon).first().prop('iconName')).toBe('iconName');
  });

  it('should render the correct prevIcon name if one is not passed', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        onChangeCallback={() => {}}
      />,
    );
    expect(wrapper.find(SprkIcon).first().prop('iconName')).toBe('chevron-left');
  });

  it('should render the correct nextIcon name if one is passed', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        onChangeCallback={() => {}}
        nextIcon="iconName"
      />,
    );
    expect(wrapper.find(SprkIcon).last().prop('iconName')).toBe('iconName');
  });

  it('should render the correct nextIcon name if one is not passed', () => {
    const wrapper = mount(
      <SprkPagination
        totalItems={50}
        itemsPerPage={10}
        onChangeCallback={() => {}}
      />,
    );
    expect(wrapper.find(SprkIcon).last().prop('iconName')).toBe('chevron-right');
  });
});
