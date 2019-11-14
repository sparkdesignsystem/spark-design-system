import React from 'react';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <nav className="drizzle-c-ReactNav sprk-u-phm">
      <ul className="drizzle-b-List drizzle-b-List--inline drizzle-b-List--spacing-m">
        <li>
          <Link to="/alert" className="drizzle-b-Link drizzle-b-Link--light">
            Alert
          </Link>
        </li>
        <li>
          <Link to="/button" className="drizzle-b-Link drizzle-b-Link--light">
            Button
          </Link>
        </li>
        <li>
          <Link to="/list" className="drizzle-b-Link drizzle-b-Link--light">
            List
          </Link>
        </li>
        <li>
          <Link to="/dictionary" className="drizzle-b-Link drizzle-b-Link--light">
            Dictionary
          </Link>
        </li>
        <li>
          <Link to="/dividers" className="drizzle-b-Link drizzle-b-Link--light">
            Dividers
          </Link>
        </li>
        <li>
          <Link to="/table" className="drizzle-b-Link drizzle-b-Link--light">
            Table
          </Link>
        </li>
        <li>
          <Link to="/dropdown" className="drizzle-b-Link drizzle-b-Link--light">
            Dropdown
          </Link>
        </li>
        <li>
          <Link to="/highlightboard" className="drizzle-b-Link drizzle-b-Link--light">
            Highlight Board
          </Link>
        </li>
        <li>
          <Link to="/icon" className="drizzle-b-Link drizzle-b-Link--light">
            Icon
          </Link>
        </li>
        <li>
          <Link to="/input" className="drizzle-b-Link drizzle-b-Link--light">
            Input
          </Link>
        </li>
        <li>
          <Link to="/link" className="drizzle-b-Link drizzle-b-Link--light">
            Link
          </Link>
        </li>
        <li>
          <Link to="/masthead-default" className="drizzle-b-Link drizzle-b-Link--light">
            Masthead (Default)
          </Link>
        </li>
        <li>
          <Link to="/masthead-extended" className="drizzle-b-Link drizzle-b-Link--light">
            Masthead (Extended)
          </Link>
        </li>
        <li>
          <Link to="/pagination" className="drizzle-b-Link drizzle-b-Link--light">
            Pagination
          </Link>
        </li>
        <li>
          <Link to="/promos" className="drizzle-b-Link drizzle-b-Link--light">
            Promos
          </Link>
        </li>
        <li>
          <Link to="/tabs" className="drizzle-b-Link drizzle-b-Link--light">
            Tabs
          </Link>
        </li>
        <li>
          <Link to="/modal" className="drizzle-b-Link drizzle-b-Link--light">
            Modal
          </Link>
        </li>
        <li>
          <Link to="/footer" className="drizzle-b-Link drizzle-b-Link--light">
            Footer
          </Link>
        </li>
        <li>
          <Link to="/toggle" className="drizzle-b-Link drizzle-b-Link--light">
            Toggle
          </Link>
        </li>
        <li>
          <Link to="/accordion" className="drizzle-b-Link drizzle-b-Link--light">
            Accordion
          </Link>
        </li>
        <li>
          <Link to="/stack" className="drizzle-b-Link drizzle-b-Link--light">
            Stack
          </Link>
        </li>
        <li>
          <Link to="/award" className="drizzle-b-Link drizzle-b-Link--light">
            Award
          </Link>
        </li>
        <li>
          <Link to="/card" className="drizzle-b-Link drizzle-b-Link--light">
            Card
          </Link>
        </li>
        <li>
          <Link to="/stepper" className="drizzle-b-Link drizzle-b-Link--light">
            Stepper
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNav;
