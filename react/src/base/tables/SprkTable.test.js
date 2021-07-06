/* global Enzyme Adapter shallow mount */
import React from 'react';
import SprkTable from './SprkTable';
import SprkButton from '../../components/buttons/SprkButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTable:', () => {
  it('should display a div element with the correct base class', () => {
    const wrapper = shallow(<SprkTable />);
    expect(wrapper.find('div.sprk-b-TableContainer').length).toBe(1);
  });

  it('should display a table element with the correct base class', () => {
    const wrapper = shallow(<SprkTable />);
    expect(wrapper.find('table.sprk-b-Table').length).toBe(1);
  });

  it('should display a table element with the correct classes if '
    + 'additionalTableClasses has a value', () => {
    const wrapper = shallow(
      <SprkTable additionalTableClasses="sprk-b-Table--secondary" />,
    );
    expect(wrapper.find('table').hasClass('sprk-b-Table--secondary')).toBe(true);
  });

  it('should display a div element with the correct data-id if idString has a '
    + 'value', () => {
    const wrapper = shallow(<SprkTable idString="table-1" />);
    expect(wrapper.find('div[data-id="table-1"]').length).toBe(1);
  });

  it('should display a div element with the correct classes if '
    + 'additionalContainerClasses has a value', () => {
    const wrapper = shallow(
      <SprkTable additionalContainerClasses="additionalClass" />,
    );
    expect(wrapper.find('div').hasClass('additionalClass')).toBe(true);
  });

  it('should display a table element with the correct classes if the variant is'
    + 'secondary', () => {
    const wrapper = shallow(<SprkTable variant="secondary" />);
    expect(wrapper.find('table').hasClass('sprk-b-Table--secondary')).toBe(true);
  });

  it('should display a table element with the correct classes if the variant '
    + 'is grouped', () => {
    const wrapper = shallow(<SprkTable variant="grouped" />);
    expect(wrapper.find('table').hasClass('sprk-b-Table--grouped-columns')).toBe(
      true,
    );
  });

  it('should display a table element with the correct classes if the variant'
    + ' is rowComparison', () => {
    const wrapper = shallow(<SprkTable variant="rowComparison" />);
    expect(wrapper.find('table').hasClass('sprk-b-Table--row-comparison')).toBe(
      true,
    );
  });

  it('should display a table element with the correct classes if the variant'
    + ' is secondaryRowComparison', () => {
    const wrapper = shallow(<SprkTable variant="secondaryRowComparison" />);
    expect(
      wrapper.find('table').hasClass('sprk-b-Table--secondary-row-comparison'),
    ).toBe(true);
  });

  it('should display a thead element with the correct class if the variant'
    + ' is default', () => {
    const wrapper = shallow(<SprkTable variant="default" />);
    expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
  });

  it('should display a thead element with the correct class if the variant'
    + ' is secondary', () => {
    const wrapper = shallow(<SprkTable variant="secondary" />);
    expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
  });

  it('should display a thead element with the correct class if the variant'
    + ' is grouped', () => {
    const wrapper = shallow(<SprkTable variant="grouped" />);
    expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
  });

  it('should display a thead element with the correct class if the variant'
    + ' is rowComparison', () => {
    const wrapper = shallow(<SprkTable variant="rowComparison" />);
    expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
  });

  it('should display one tr element in the thead element if columns'
    + ' are present', () => {
    const wrapper = shallow(
      <SprkTable
        columns={[
          { name: 'data1', header: 'Header 1' },
          { name: 'data2', header: 'Header 2' },
          { name: 'data3', header: 'Header 3' },
        ]}
      />,
    );
    expect(wrapper.find('tr').length).toBe(1);
  });

  it('should display multiple tr elements in the thead element if columns'
    + ' are present and the variant is grouped', () => {
    const wrapper = shallow(
      <SprkTable
        variant="grouped"
        columns={[
          [
            { name: 'column1', header: 'Column Heading', rowspan: 2 },
            { name: 'column2', header: 'Column Heading', colspan: 3 },
            { name: 'column3', header: 'Column Heading', rowspan: 2 },
          ],
          [
            { name: 'subheading1', header: 'SubHeading' },
            { name: 'subheading2', header: 'SubHeading' },
            { name: 'subheading3', header: 'Subheading' },
          ],
        ]}
      />,
    );
    expect(wrapper.find('tr').length).toBe(2);
  });

  it('should display multiple tr elements in the tbody element if rows is'
    + ' present and the variant is grouped', () => {
    const wrapper = shallow(
      <SprkTable
        variant="grouped"
        columns={[
          [
            { header: 'Data 1', rowspan: 2 },
            { header: 'Data 3', colspan: 3 },
            { header: 'Data 2', rowspan: 2 },
          ],
          [
            { header: 'SubHeading 1' },
            { header: 'SubHeading 2' },
            { header: 'Subheading 3' },
          ],
        ]}
        rows={[
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ]}
      />,
    );
    expect(wrapper.find('tbody tr').length).toBe(4);
  });

  it('should display a tbody element when rows prop is not undefined', () => {
    const wrapper = shallow(
      <SprkTable
        rows={[
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
        ]}
      />,
    );
    expect(wrapper.find('tbody').length).toBe(1);
  });

  it('should display a th with the correct class when the variant is'
    + ' rowComparison and columns is not undefined', () => {
    const wrapper = shallow(
      <SprkTable
        variant="rowComparison"
        columns={[
          { name: 'data1', header: 'Header 1' },
          { name: 'data2', header: 'Header 2' },
          { name: 'data3', header: 'Header 3' },
        ]}
      />,
    );
    expect(wrapper.find('th.sprk-b-Table__empty-heading').length).toBe(1);
  });

  it('should not display a thead element if the variant is'
    + ' secondaryRowComparison', () => {
    const wrapper = shallow(<SprkTable variant="secondaryRowComparison" />);
    expect(wrapper.find('thead').length).toBe(0);
  });

  it('should render the appropriate number of td elements based on'
    + ' the columns prop', () => {
    const wrapper = shallow(
      <SprkTable
        columns={[
          { name: 'data1', header: 'Header 1' },
          { name: 'data2', header: 'Header 2' },
          { name: 'data3', header: 'Header 3' },
        ]}
      />,
    );
    expect(wrapper.find('th').length).toBe(3);
  });

  it('should not render a tr element if the columns prop is not provided', () => {
    const wrapper = shallow(<SprkTable />);
    expect(wrapper.find('thead tr').length).toBe(0);
  });

  it('should not render a tr element if the rows prop is not supplied', () => {
    const wrapper = shallow(<SprkTable />);
    expect(wrapper.find('tbody tr').length).toBe(0);
  });

  it('should render the appropriate number of td elements'
    + ' based on the rows prop', () => {
    const wrapper = shallow(
      <SprkTable
        rows={[
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
        ]}
        columns={[
          { name: 'data1', header: 'Header 1' },
          { name: 'data2', header: 'Header 2' },
          { name: 'data3', header: 'Header 3' },
        ]}
      />,
    );
    expect(wrapper.find('tbody td').length).toBe(12);
  });

  it('should render the appropriate number of tr elements in the tbody'
    + ' based on the rows prop', () => {
    const wrapper = shallow(
      <SprkTable
        variant="rowComparison"
        rows={[
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
        ]}
        columns={[
          { name: 'data1', header: 'Header 1' },
          { name: 'data2', header: 'Header 2' },
          { name: 'data3', header: 'Header 3' },
        ]}
      />,
    );
    expect(wrapper.find('tbody tr').length).toBe(4);
  });

  it('should render a buttons if the button is passed in the rows prop and'
    + ' is variant secondaryRowComparison', () => {
    const wrapper = mount(
      <SprkTable
        variant="secondaryRowComparison"
        columns={[{ name: 'data1' }, { name: 'data2' }]}
        rows={[
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
        ]}
      />,
    );
    expect(wrapper.find('tbody button').length).toBe(4);
  });

  it('should render a appropriate number of th elements when rows is passed'
    + ' and variant is secondaryRowComparison', () => {
    const wrapper = shallow(
      <SprkTable
        variant="secondaryRowComparison"
        columns={[{ name: 'data1' }, { name: 'data2' }]}
        rows={[
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
          {
            rowHeading: 'Row Heading',
            data1: 'Data',
            data2: 'Data',
            button: <SprkButton variant="secondary">Learn More</SprkButton>,
          },
        ]}
      />,
    );
    expect(wrapper.find('tbody th').length).toBe(4);
  });

  it('should render div and table elements and children if variant'
    + ' is html', () => {
    const wrapper = shallow(<SprkTable variant="html" />);
    expect(wrapper.find('div').hasClass('sprk-b-TableContainer')).toBe(true);
    expect(wrapper.find('table').hasClass('sprk-b-Table')).toBe(true);
  });
});
