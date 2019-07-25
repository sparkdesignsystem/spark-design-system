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
        const { edges: guides } = data.allMdx;
        return(
          <>
            <h3 className="context-menu__heading">Guides</h3>
            <nav>
              <ul className="context-menu__collection">
                { guides.map((guide) => {
                  return (
                    <li className="context-menu__collection-item">
                      <Link className="context-menu__link" to={`/${guide.node.parent.name}`}>{ guide.node.frontmatter.title || guide.node.parent.name }</Link>
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