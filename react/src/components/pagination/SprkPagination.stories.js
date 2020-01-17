import React from 'react';
import SprkPagination from './SprkPagination';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Pagination',
  component: SprkPagination,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkPagination'],
    info: markdownDocumentationLinkBuilder('components', 'pagination'),
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

export const pager = () => (
  <SprkPagination
    variant="pager"
    currentPage={1}
    totalItems={5}
    itemsPerPage={1}
    onChangeCallback={() => {}}
  />
);
