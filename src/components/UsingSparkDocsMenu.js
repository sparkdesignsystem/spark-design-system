import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ContextSubMenu from './ContextSubMenu';

const UsingSparkDocsMenu = () => (
  <StaticQuery
    query={graphql`
      {
        components: allMdx(filter: {fileAbsolutePath: {regex: "/src/pages/using-spark/components/"}, frontmatter: {excludeFromSideNav: {ne: true}}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                  relativeDirectory
                }
              }
            }
          }
        },
        examples: allMdx(filter: {fileAbsolutePath: {regex: "/src/pages/using-spark/examples/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                  relativeDirectory
                }
              }
            }
          }
        },
        foundations: allMdx(filter: {fileAbsolutePath: {regex: "/src/pages/using-spark/foundations/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                  relativeDirectory
                }
              }
            }
          }
        },
        guides: allMdx(filter: {fileAbsolutePath: {regex: "/src/pages/using-spark/guides/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                  relativeDirectory
                }
              }
            }
          }
        }
  }
    `}
    render={(data) => {
      const { edges: componentPages } = data.components;
      const { edges: guidePages } = data.guides;
      const { edges: examplePages } = data.examples;
      const { edges: foundationPages } = data.foundations;

      return (
        <>
          <h3 className="docs-menu__heading">Using Spark</h3>
          <div className="docs-menu__collection">
            <nav>
              {foundationPages.length > 0 && <ContextSubMenu directory="foundations" heading="Foundations" collection={foundationPages} />}
              {guidePages.length > 0 && <ContextSubMenu directory="guides" heading="Guides" collection={guidePages} />}
              {componentPages.length > 0 && <ContextSubMenu directory="components" heading="Components" collection={componentPages} />}
              {examplePages.length > 0 && <ContextSubMenu directory="examples" heading="Examples" collection={examplePages} />}
            </nav>
          </div>
        </>
      );
    }}
  />
);

export default UsingSparkDocsMenu;
