import React from 'react';
import ContextSubMenu from './ContextSubMenu';
import { useUsingSparkData } from '../hooks/use-using-spark';

const UsingSparkDocsMenu = () => {
  const componentPages = useUsingSparkData().components;
  const guidePages = useUsingSparkData().guides;
  const examplePages = useUsingSparkData().examples;
  const foundationPages = useUsingSparkData().foundations;

  // Makes Color Usage and Color Codes the first pages
  const firstColorPages = foundationPages
    .filter((item) => {
      const { title } = item.node.frontmatter;
      return title === 'Color Usage' || title === 'Color Codes';
    })
    .reverse();

  const allOtherPages = foundationPages.filter((item) => {
    const { title } = item.node.frontmatter;
    return title !== 'Color Usage' && title !== 'Color Codes';
  });

  const generatedFoundationPages = firstColorPages.concat(allOtherPages);

  return (
    <div className="docs-menu__collection">
      <nav aria-label="Using Spark">
        <h3 className="docs-menu__heading">Using Spark</h3>
        {foundationPages.length > 0 && (
          <ContextSubMenu
            directory="foundations"
            heading="Foundations"
            collection={generatedFoundationPages}
          />
        )}
        {guidePages.length > 0 && (
          <ContextSubMenu
            directory="guides"
            heading="Guides"
            collection={guidePages}
          />
        )}
        {componentPages.length > 0 && (
          <ContextSubMenu
            directory="components"
            heading="Components"
            collection={componentPages}
          />
        )}
        {examplePages.length > 0 && (
          <ContextSubMenu
            directory="examples"
            heading="Examples"
            collection={examplePages}
          />
        )}
      </nav>
    </div>
  );
};

export default UsingSparkDocsMenu;
