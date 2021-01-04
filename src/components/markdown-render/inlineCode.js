import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import customTheme from 'prism-react-renderer/themes/vsDark';

const InlineCode = ({ children, className, additionalPreClasses, theme }) => {
  className = className ? className : '';
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme || customTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`docs-code sprk-u-Measure ${className} ${additionalPreClasses}`}
          style={{ ...style }}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex="0"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default InlineCode;
