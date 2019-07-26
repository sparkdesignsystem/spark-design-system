import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkList from './SprkList';
import SprkListItem from './SprkListItem';

storiesOf('Base|Lists', module)
  .add('Unordered', () => (
    <SprkList
      element="ul"
      idString="unordered-list-1"
    >
      <SprkListItem idString="list-item-1">
          Unordered List Item
      </SprkListItem>
      <SprkListItem idString="list-item-2">
          Unordered List Item
      </SprkListItem>
      <SprkListItem idString="list-item-3">
          Unordered List Item
      </SprkListItem>
    </SprkList>
  ))
  .add('Ordered', () => (
    <SprkList
      element="ol"
      idString="ordered-list-1"
    >
      <SprkListItem idString="list-item-4">
        Ordered List Item
      </SprkListItem>
      <SprkListItem idString="list-item-5">
        Ordered List Item
      </SprkListItem>
      <SprkListItem idString="list-item-6">
        Ordered List Item
      </SprkListItem>
    </SprkList>
  ))
  .add('Indented', () => (
    <SprkList
      element="ul"
      idString="indented-list-1"
      variant="indented"
    >
      <SprkListItem idString="list-item-11">Indented List Item</SprkListItem>
      <SprkListItem idString="list-item-12">Indented List Item</SprkListItem>
      <SprkListItem idString="list-item-13">Indented List Item</SprkListItem>
    </SprkList>
  ))
  .add('Bare', () => (
    <SprkList
      element="ul"
      idString="bare-list-1"
      variant="bare"
    >
      <SprkListItem idString="list-item-8">Bare List Item</SprkListItem>
      <SprkListItem idString="list-item-9">Bare List Item</SprkListItem>
      <SprkListItem idString="list-item-10">Bare List Item</SprkListItem>
    </SprkList>
  ));
