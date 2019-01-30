import React from 'react';
import { SprkMasthead, SprkLink, SprkButton } from '@sparkdesignsystem/spark-core-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';
import { Link } from 'react-router-dom';

function SprkMastheadDefaultDocs(props) {

  const links = [
    {
      element: Link,
      text: 'Item 1',
      to: '/link'
    },
    {
      text: 'Item 2',
      href: 'https://www.google.com',
      target: '_blank'
    }
  ];

  const addedNarrowNavLinks = [
    {
      element: Link,
      leadingIcon: 'landline',
      text: '(555) 555-5555',
      to: '/button'
    },
    {
      element: Link,
      leadingIcon: 'call-team-member',
      text: 'Talk To Us',
      to: '/link'
    },
    {
      element: Link,
      text: 'Sign In',
      to: '/button',
      isButton: true
    },
  ];

  const utilityItems = [
    <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">(555) 555-5555</SprkLink>,
    <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">Talk To Us</SprkLink>,
    <SprkButton element={Link} to="/button" variant="secondary" additionalClasses="sprk-c-Button--compact">Sign In</SprkButton>
  ];

  return (
    <EmptyLayout>
      <SprkMasthead
        littleNavLinks={links}
        narrowNavLinks={links.concat(addedNarrowNavLinks)}
        siteLogo={<SiteLogo />}
        utilityContents={utilityItems}/>
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
