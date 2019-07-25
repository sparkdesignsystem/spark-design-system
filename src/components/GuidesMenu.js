import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery } from 'gatsby';

const GuidesMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/"}}) {
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
                  }
                }
              }
            }
          }
        }
      `}
      render={ data => {
        console.log(data);
        const { edges: guides } = data.allMdx;
        return(
          <>
            <h3>Guides</h3>
            <nav>
              <ul>
                { guides.map((guide) => {
                  return (
                    <li>
                      <Link to={`/${guide.node.parent.name}`}>{ guide.node.frontmatter.title || guide.node.parent.name }</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )
      }}
    />
  );
}

export default GuidesMenu;