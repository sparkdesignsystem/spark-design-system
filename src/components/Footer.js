/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import SiteLogo from './site-logo';

const Footer = ({ children }) => (
  <div className="docs-footer">
    <SiteLogo />
    <div className="docs-footer__content">
      <p>Licensed under <a className="sprk-b-Link" href="https://github.com/sparkdesignsystem/spark-design-system/blob/master/LICENSE">MIT</a></p>
      <p>2019 <a className="sprk-b-Link" href="https://www.rocketmortgage.com/">Rocket Mortgage</a> by Quicken Loans</p>
      <p> Spark is available for
        <a className="sprk-b-Link" href="#nogo">Angular</a>,
        <a className="sprk-b-Link" href="#nogo">React</a>,
        and <a className="sprk-b-Link" href="#nogo">Vanilla JS</a>
      </p>
    </div>

    <ul className="docs-footer__links">
      <li className="docs-footer__link">
        <a className="sprk-b-Link" href="https://github.com/sparkdesignsystem/spark-design-system/blob/staging/CONTRIBUTING.md">Contribution Guidelines</a>
      </li>
      <li className="docs-footer__link">
        <a className="sprk-b-Link" href="https://github.com/sparkdesignsystem/spark-design-system">Github</a>
      </li>
      <li className="docs-footer__link">
        <a className="sprk-b-Link" href="https://twitter.com/sparkQL">Twitter</a>
      </li>
      <li className="docs-footer__link">
        <a className="sprk-b-Link" href="#nogo" mailto="sparkdesignsystem@quickenloans.com">Contact Us</a>
      </li>
    </ul>
  </div>
);
export default Footer;
