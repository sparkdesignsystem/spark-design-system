import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkHighlightBoard } from '@sparkdesignsystem/spark-core-react';

const SprkHighlightBoardDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base">
        <SprkHighlightBoard
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt='flower'
          heading='Hello, Welcome To Spark Design System'
          ctaText='Button 1'
          ctaHref='#'
          ctaText2='Button 2'
          ctaHref2='#'/>
      </ExampleContainer>
      <ExampleContainer heading="No Image">
        <SprkHighlightBoard
          variant='noimage'
          heading='Hello, Welcome To Spark Design System'
          ctaText='Button 1'
          ctaHref='#'
          ctaText2='Button 2'
          ctaHref2='#'/>
      </ExampleContainer>
      <ExampleContainer heading="Stacked">
        <SprkHighlightBoard
          variant='stacked'
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt='flower'
          heading='Hello, Welcome To Spark Design System'
          ctaText='Button 1'
          ctaHref='#'
          ctaText2='Button 2'
          ctaHref2='#'/>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkHighlightBoardDocs;
