import React from 'react';
import { SprkList, SprkListItem } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkListDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkList element="ol" idString="ordered-list-1">
          <SprkListItem idString="list-item-1">Ordered List Item</SprkListItem>
          <SprkListItem idString="list-item-2">Ordered List Item</SprkListItem>
          <SprkListItem idString="list-item-3">Ordered List Item</SprkListItem>
        </SprkList>
      </ExampleContainer>

      <ExampleContainer>
        <SprkList element="ul" idString="unordered-list-1">
          <SprkListItem idString="list-item-4">
            Unordered List Item
          </SprkListItem>
          <SprkListItem idString="list-item-5">
            Unordered List Item
          </SprkListItem>
          <SprkListItem idString="list-item-6">
            Unordered List Item
          </SprkListItem>
        </SprkList>
      </ExampleContainer>

      <ExampleContainer>
        <SprkList element="ul" idString="bare-list-1" variant="bare">
          <SprkListItem idString="list-item-8">Bare List Item</SprkListItem>
          <SprkListItem idString="list-item-9">Bare List Item</SprkListItem>
          <SprkListItem idString="list-item-10">Bare List Item</SprkListItem>
        </SprkList>
      </ExampleContainer>

      <ExampleContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          urna quis nulla ultrices, sed efficitur risus elementum.
        </p>
        <SprkList element="ol" idString="indented-list-1" variant="indented">
          <SprkListItem idString="list-item-11">
            Indented List Item
          </SprkListItem>
          <SprkListItem idString="list-item-12">
            Indented List Item
          </SprkListItem>
          <SprkListItem idString="list-item-13">
            Indented List Item
          </SprkListItem>
        </SprkList>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          urna quis nulla ultrices, sed efficitur risus elementum.
        </p>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkListDocs;
