import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import LinkList from '../site-structure/LinkList';

const UsingSparkDocsMenu = () => (
  <StaticQuery
    query={graphql`
      {
        components: allMdx(filter: {fileAbsolutePath: {regex: "/src/pages/using-spark/components/"}}) {
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
          <h3 className="menu__heading">Using Spark</h3>
          <nav>
            {foundationPages.length > 0 && <LinkList heading="Foundations" collection={foundationPages} />}
            {guidePages.length > 0 && <LinkList heading="Guides" collection={guidePages} />}
            {componentPages.length > 0 && <LinkList heading="Components" collection={componentPages} />}
            {examplePages.length > 0 && <LinkList heading="Examples" collection={examplePages} />}
          </nav>
        </>
      );
    }}
  />
);

export default UsingSparkDocsMenu;
