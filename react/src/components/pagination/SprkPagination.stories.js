import React from 'react';
import SprkPagination from './SprkPagination';

export default {
  title: 'Components/Pagination',
  component: SprkPagination,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkPagination'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/pagination)
    `,
  },
};

export const defaultStory = () => (
  <SprkPagination
    currentPage={1}
    totalItems={3}
    itemsPerPage={1}
    onChangeCallback={() => {}}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const long = () => (
  <SprkPagination
    currentPage={1}
    totalItems={100}
    itemsPerPage={5}
    onChangeCallback={() => {}}
  />
);

export const pager = () => (
  <SprkPagination
    variant="pager"
    currentPage={1}
    totalItems={5}
    itemsPerPage={1}
    onChangeCallback={() => {}}
  />
);
