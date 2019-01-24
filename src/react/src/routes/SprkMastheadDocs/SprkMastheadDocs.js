import React from 'react';
import { SprkMasthead, SprkLink, SprkButton } from '@sparkdesignsystem/spark-core-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';

function SprkMastheadDocs(props) {
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
      text: 'Item 1',
      href: '#nogo',
      subnav:
        [
          {
            text: 'Item 1',
            href: '#nogo'
          },
          {
            text: 'Item 2',
            href: '#nogo'
          }
        ]
    },
    {
      text: 'Item 2',
      href: '#nogo',
      isActive: true
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

export default SprkMastheadDocs;