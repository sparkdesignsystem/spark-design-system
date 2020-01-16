import { useStaticQuery, graphql } from 'gatsby';

export const useInstallingSparkData = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/installing-spark/"}}) {
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

export default useInstallingSparkData;
