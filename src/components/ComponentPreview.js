import React from 'react';

function ComponentPreview({component}) {
  const componentURL = `https://spark-sb-react.netlify.com/iframe.html?id=components-${component}--default-story`;

  return (
    <iframe
      className="docs-c-ComponentPreview"
      title="Storybook Component Preview"
      src={componentURL}>
    </iframe>
  );
}

export default ComponentPreview;
