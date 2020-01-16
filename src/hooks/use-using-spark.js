import { useStaticQuery, graphql } from 'gatsby';

export const useUsingSparkData = () => {
  const {
    components,
    examples,
    foundations,
    guides
  } = useStaticQuery(
    graphql`
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
    `,
  );

  return {
    components: components.edges,
    examples: examples.edges,
    guides: guides.edges,
    foundations: foundations.edges,
  };
};

export default useUsingSparkData;
