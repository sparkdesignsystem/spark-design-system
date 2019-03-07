import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SiteNav from '../SiteNav/SiteNav';

function SiteHeader(props) {
  return (
    <header>
      <div className="drizzle-o-Layout__header sprk-u-mbn sprk-u-pvl drizzle-c-AngularHeader">
        <Link to="/" className='sprk-b-Link'>
          <h1 className="drizzle-b-h1">
            Spark Core React
            <img width="50" alt="React Logo" src={logo} />
          </h1>
        </Link>
      </div>
      <SiteNav />
    </header>
  );
}

export default SiteHeader;
