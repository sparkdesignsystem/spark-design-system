import React from 'react';

function SprkMastheadMenuIcon({isOpen}) {
  return (
    <div className="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs">
      <button className="sprk-c-Menu" type="button" aria-expanded={isOpen ? 'true' : 'false'}>
        <span className="sprk-u-ScreenReaderText">Toggle Navigation</span>
          <svg className="sprk-c-Icon sprk-c-Icon--l sprk-c-Menu__icon" aria-hidden="true" viewBox="0 0 64 64"
               xmlns="http://www.w3.org/2000/svg">
            <g>
              <path className="sprk-c-Menu__line sprk-c-Menu__line--two" d="m8 32h48"/>
              <path className="sprk-c-Menu__line sprk-c-Menu__line--one" d="m8 18.68h48"/>
              <path className="sprk-c-Menu__line sprk-c-Menu__line--three" d="m8 45.32h48"/>
            </g>
          </svg>
      </button>
    </div>

  );
}

export default SprkMastheadMenuIcon;