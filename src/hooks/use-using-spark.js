import { useStaticQuery, graphql } from 'gatsby';

export const useUsingSparkData = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/using-spark/"}}) {
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

export default useUsingSparkData;
