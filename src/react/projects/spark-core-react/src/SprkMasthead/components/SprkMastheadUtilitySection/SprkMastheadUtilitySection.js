import React from 'react';

function SprkMastheadUtilitySection({links, ...rest}) {
  return (
    <ul
      className="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column">
      { links.map((link, id) => {
        return(
          <li key={id}>
            <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href={link.href}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

SprkMastheadUtilitySection.defaultProps = {
  links: [
    {
      text: '(555) 555-5555',
      href: '#nogo'
    },
    {
      text: 'Talk To Us',
      href: '#nogo'
    },
    {
      text: 'Sign In',
      href: '#nogo'
    }
    ],
};

export default SprkMastheadUtilitySection;