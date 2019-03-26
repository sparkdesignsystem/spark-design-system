import React from 'react';
import { SprkHighlightBoard } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkHighlightBoardDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base">
        <SprkHighlightBoard
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="desktop"
          heading="Hello, Welcome To Spark Design System"
          ctaText="Designers"
          ctaHref="/gettingstarted/designers.html"
          ctaText2="Developers"
          ctaHref2="/gettingstarted/developers.html"
          idString="highlightboard-1"
        />
      </ExampleContainer>
      <ExampleContainer heading="No Image">
        <SprkHighlightBoard
          variant="noImage"
          heading="Hello, Welcome To Spark Design System"
          ctaText="Designers"
          ctaHref="#"
          ctaText2="Developers"
          ctaHref2="#"
          idString="highlightboard-2"
        />
      </ExampleContainer>
      <ExampleContainer heading="Stacked">
        <SprkHighlightBoard
          variant="stacked"
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="desktop"
          heading="Hello, Welcome To Spark Design System"
          ctaText="Designers"
          ctaHref="/gettingstarted/designers.html"
          ctaText2="Developers"
          ctaHref2="/gettingstarted/developers.html"
          idString="highlightboard-3"
        />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkHighlightBoardDocs;
