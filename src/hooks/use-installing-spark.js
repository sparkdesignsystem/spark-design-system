import { useStaticQuery, graphql } from 'gatsby';

export const useInstallingSparkData = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/src/pages/installing-spark/" }
            frontmatter: { excludeFromSideNav: { ne: true } }
          }
          sort: {
            fields: [frontmatter___order]
            order: ASC
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                order
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
    `
  );
  return allMdx.edges;
};

export default useInstallingSparkData;
