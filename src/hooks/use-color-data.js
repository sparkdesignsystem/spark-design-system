import { useStaticQuery, graphql } from 'gatsby';

const useColorData = () => {
  const { allSassVarsJson } = useStaticQuery(
    graphql`
      query SassColors {
        allSassVarsJson {
          edges {
            node {
              description
              context {
                name
                value
              }
              file {
                name
              }
              group
              type
            }
          }
        }
      }
    `,
  );

  const sassColorData = allSassVarsJson.edges.filter((item) => {
    return item.node.file.name === '_colors.scss';
  });

  return sassColorData;
};

export default useColorData;
