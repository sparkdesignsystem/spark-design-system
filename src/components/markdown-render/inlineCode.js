import React from 'react';

function InlineCode(props) {
  return (
    <div className="docs-command">
      <code className="docs-CodeHighlight" {...props}></code>
    </div>
  );
}

export default InlineCode;
