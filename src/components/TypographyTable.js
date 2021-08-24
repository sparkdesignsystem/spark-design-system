import React from 'react';
import PropTypes from 'prop-types';
import {
  SprkTable,
  SprkHeading,
  SprkStack,
  SprkStackItem,
} from '@sparkdesignsystem/spark-react';

const TypographyTable = (props) => {
  const columns = [
    {
      name: 'scale',
      header: 'Scale Category',
    },
    {
      name: 'weight',
      header: 'Weight',
    },
    {
      name: 'size',
      header: 'Size',
    },
    {
      name: 'lineHeight',
      header: 'Line Height',
    },
  ];
  let rows = [];

  const { category } = props;

  if (category === 'desktop') {
    rows = [
      {
        scale: 'H1',
        weight: 'Bold',
        size: '54px',
        lineHeight: '60px',
      },
      {
        scale: 'H2',
        weight: 'Bold',
        size: '40px',
        lineHeight: '48px',
      },
      {
        scale: 'H3',
        weight: 'Light',
        size: '34px',
        lineHeight: '44px',
      },
      {
        scale: 'H4',
        weight: 'Bold',
        size: '26px',
        lineHeight: '32px',
      },
      {
        scale: 'H5',
        weight: 'Bold',
        size: '20px',
        lineHeight: '26px',
      },
      {
        scale: 'H6',
        weight: 'Light',
        size: '20px',
        lineHeight: '24px',
      },
      {
        scale: 'H7',
        weight: 'Bold',
        size: '16px',
        lineHeight: '20px',
      },
      {
        scale: 'B1',
        weight: 'Medium',
        size: '16px',
        lineHeight: '24px',
      },
      {
        scale: 'B2',
        weight: 'Light',
        size: '16px',
        lineHeight: '24px',
      },
      {
        scale: 'B3',
        weight: 'Light',
        size: '14px',
        lineHeight: '20px',
      },
      {
        scale: 'Legal',
        weight: 'Light',
        size: '13px',
        lineHeight: '20px',
      },
    ];
  } else {
    rows = [
      {
        scale: 'H1',
        weight: 'Bold',
        size: '40px',
        lineHeight: '44px',
      },
      {
        scale: 'H2',
        weight: 'Bold',
        size: '32px',
        lineHeight: '36px',
      },
      {
        scale: 'H3',
        weight: 'Light',
        size: '28px',
        lineHeight: '36px',
      },
      {
        scale: 'H4',
        weight: 'Bold',
        size: '24px',
        lineHeight: '32px',
      },
      {
        scale: 'H5',
        weight: 'Bold',
        size: '20px',
        lineHeight: '26px',
      },
      {
        scale: 'H6',
        weight: 'Light',
        size: '20px',
        lineHeight: '24px',
      },
      {
        scale: 'H7',
        weight: 'Bold',
        size: '16px',
        lineHeight: '22px',
      },
      {
        scale: 'B1',
        weight: 'Medium',
        size: '16px',
        lineHeight: '24px',
      },
      {
        scale: 'B2',
        weight: 'Light',
        size: '16px',
        lineHeight: '24px',
      },
      {
        scale: 'B3',
        weight: 'Light',
        size: '14px',
        lineHeight: '20px',
      },
      {
        scale: 'Legal',
        weight: 'Light',
        size: '13px',
        lineHeight: '20px',
      },
    ];
  }

  return (
    <>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkHeading variant="displayFive">
            {category === 'desktop' ? 'Desktop' : 'Mobile'}
          </SprkHeading>
        </SprkStackItem>
        <SprkStackItem>
          <SprkTable
            additionalTableClasses="
              sprk-b-Table--spacing-medium
              sprk-b-Table--striped-even
            "
            columns={columns}
            rows={rows}
          />
        </SprkStackItem>
      </SprkStack>
    </>
  );
};

TypographyTable.propTypes = {
  category: PropTypes.string,
};

export default TypographyTable;
