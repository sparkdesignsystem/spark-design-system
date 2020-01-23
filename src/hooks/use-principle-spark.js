import { useStaticQuery, graphql } from 'gatsby';

export const usePrincipleSparkData = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/principles/"}}) {
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
  return allMdx.edges;
};

export default usePrincipleSparkData;
