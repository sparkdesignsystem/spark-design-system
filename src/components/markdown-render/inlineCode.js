import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer'

function InlineCode({children, className}) {
  const language = className.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={`docs-code ${className}`} style={{...style}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default InlineCode;
