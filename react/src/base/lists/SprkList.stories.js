import React from 'react';
import SprkList from './SprkList';
import SprkListItem from './SprkListItem';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/List',
  component: SprkList,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    subcomponents: {
      SprkListItem,
    },
    jest: ['SprkList, SprkListItem'],
    info: markdownDocumentationLinkBuilder('list'),
  },
};

export const unordered = () => (
  <SprkList element="ul" idString="unordered-list-1">
    <SprkListItem idString="list-item-1">Unordered List Item</SprkListItem>
    <SprkListItem idString="list-item-2">Unordered List Item</SprkListItem>
    <SprkListItem idString="list-item-3">Unordered List Item</SprkListItem>
  </SprkList>
);

unordered.story = {
  name: 'Unordered',
};

export const ordered = () => (
  <SprkList element="ol" idString="ordered-list-1">
    <SprkListItem idString="list-item-4">Ordered List Item</SprkListItem>
    <SprkListItem idString="list-item-5">Ordered List Item</SprkListItem>
    <SprkListItem idString="list-item-6">Ordered List Item</SprkListItem>
  </SprkList>
);

ordered.story = {
  name: 'Ordered',
};

export const indented = () => (
  <SprkList element="ul" idString="indented-list-1" variant="indented">
    <SprkListItem idString="list-item-11">Indented List Item</SprkListItem>
    <SprkListItem idString="list-item-12">Indented List Item</SprkListItem>
    <SprkListItem idString="list-item-13">Indented List Item</SprkListItem>
  </SprkList>
);

indented.story = {
  name: 'Indented',
};

export const bare = () => (
  <SprkList element="ul" idString="bare-list-1" variant="bare">
    <SprkListItem idString="list-item-8">Bare List Item</SprkListItem>
    <SprkListItem idString="list-item-9">Bare List Item</SprkListItem>
    <SprkListItem idString="list-item-10">Bare List Item</SprkListItem>
  </SprkList>
);

bare.story = {
  name: 'Bare',
};
