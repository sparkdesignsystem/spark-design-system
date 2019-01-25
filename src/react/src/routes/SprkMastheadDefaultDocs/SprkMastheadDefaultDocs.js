import React from 'react';
import { SprkMasthead, SprkMastheadLink, SprkLink, SprkButton } from '@sparkdesignsystem/spark-core-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';
import { Link } from 'react-router-dom';

function SprkMastheadDefaultDocs(props) {
  const getUtilityContents = () => {
    let utilityItems = [];
    utilityItems.push(<SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">(555) 555-5555</SprkLink>);
    utilityItems.push(<SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">Talk To Us</SprkLink>);
    utilityItems.push(<SprkButton variant="secondary" additionalClasses="sprk-c-Button--compact">Sign In</SprkButton>);
    return utilityItems;
  };

  const littleNavLinks = [
    {
      text: 'Item 1',
      href: '#nogo'
    },
    {
      text: 'Item 2',
      href: '#nogo'
    }
  ];

  const narrowNavLinks = [
    {
      link: <SprkMastheadLink element={Link} to="/links">Item 1</SprkMastheadLink>
    },
    {
      containerText: 'Item 2',
      subNavLinks:
        [
          <SprkMastheadLink element={Link} isSubNavLink to="/buttons">Item 1</SprkMastheadLink>,
          <SprkMastheadLink element={Link} isSubNavLink to="/buttons">Item 2</SprkMastheadLink>,
          <SprkMastheadLink element={Link} isSubNavLink to="/buttons">Item 3</SprkMastheadLink>,
        ]
    },
    {
      link: <SprkMastheadLink element='a' href="https://www.google.com" target="_blank" leadingIcon="landline" to="/buttons">(555) 555-5555</SprkMastheadLink>,
    },
    {
      link: <SprkMastheadLink element={Link} leadingIcon="call-team-member" to="/buttons">Talk to Us</SprkMastheadLink>,
    },
    {
      link: <SprkButton additionalClasses="sprk-c-Button--compact sprk-c-Button--full@sm" element={Link} to="/buttons" variant="secondary">Sign In</SprkButton>,
      additionalClasses: 'sprk-u-pam',
    }
  ];

  return (
    <EmptyLayout>
      <SprkMasthead
        littleNavLinks={littleNavLinks}
        narrowNavLinks={narrowNavLinks}
        siteLogo={<SiteLogo />}
        utilityContents={getUtilityContents()}/>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
      </div>
    </EmptyLayout>
  );
}

export default SprkMastheadDefaultDocs;
