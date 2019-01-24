import React from 'react';
import { Link } from 'react-router-dom';

function SiteNav(props) {
  return (
    <nav className="drizzle-c-ReactNav sprk-u-phm">
      <ul className="drizzle-b-List drizzle-b-List--inline drizzle-b-List--spacing-m">
        <li>
          <Link to="/buttons" className="drizzle-b-Link drizzle-b-Link--light">
            Buttons
          </Link>
        </li>
        <li>
          <Link to="/links" className="drizzle-b-Link drizzle-b-Link--light">
            Links
          </Link>
        </li>
        <li>
          <Link to="/promos" className="drizzle-b-Link drizzle-b-Link--light">
            Promos
          </Link>
        </li>
        <li>
          <Link to="/dividers" className="drizzle-b-Link drizzle-b-Link--light">
            Dividers
          </Link>
        </li>
        <li>
          <Link to="/alerts" className="drizzle-b-Link drizzle-b-Link--light">
            Alerts
          </Link>
        </li>
        <li>
          <Link to="/highlightboard" className="drizzle-b-Link drizzle-b-Link--light">
            Highlight Board
          </Link>
        </li>
        <li>
          <Link to="/dictionary" className="drizzle-b-Link drizzle-b-Link--light">
            Dictionary
          </Link>
        </li>
        <li>
          <Link to="/tabbed-navs" className="drizzle-b-Link drizzle-b-Link--light">
            Tabbed Navs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNav;
