import { useStaticQuery, graphql } from 'gatsby';
import compareEdges from '../util/compareEdges';

export const useUsingSparkData = () => {
  const {
    components,
    examples,
    foundations,
    guides
  } = useStaticQuery(
    graphql`
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
    `,
  );

  return {
    components: components.edges.sort(compareEdges),
    examples: examples.edges.sort(compareEdges),
    guides: guides.edges.sort(compareEdges),
    foundations: foundations.edges.sort(compareEdges),
  };
};

export default useUsingSparkData;
