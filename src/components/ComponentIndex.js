import React from 'react';

const ComponentIndex = ({ id, name, reactLink, angularLink, htmlLink }) => { 
  const links = [ 
      {
        name: 'react',
        link: reactLink
      },
      {
        name: 'angular',
        link: angularLink
      },
      {
        name: 'html',
        link: htmlLink
      }
    ];

  return(
    <div className="component-index" id={id}>
      <h2 className="sprk-b-TypeDisplayThree component-index__heading">{name}</h2>
      <ul className="component-index-list">
        { links.map((link, index) => {
          return(
           <>
             { link.link
              && <li className="component-index-list__item" key={index}>
                  <a
                    className="sprk-b-Link component-index-list__link"
                    href={`https://${link.name}.sparkdesignsystem.com/${link.link}`}
                  >
                    {link.name}
                  </a>
                </li>
             }
           </>
          );
          })
        }
      </ul>
    </div>
  )
};

export default ComponentIndex;
