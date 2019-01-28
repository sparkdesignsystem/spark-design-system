import React from 'react';
import { SprkMasthead, SprkMastheadLink, SprkLink, SprkButton, SprkIcon, SprkDropdown } from '@sparkdesignsystem/spark-core-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';
import { Link } from 'react-router-dom';

function SprkMastheadExtendedDocs(props) {
  const getUtilityContents = () => {
    let utilityItems = [];
    utilityItems.push(<SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">Talk To Us</SprkLink>);
    utilityItems.push(<SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link"><SprkIcon iconType="settings" additionalClasses="sprk-c-Icon--stroke-current-color sprk-c-Icon--l" /></SprkLink>);
    utilityItems.push(<SprkDropdown additionalClasses="sprk-u-Right--zero sprk-u-mrm" additionalIconClasses="sprk-c-Icon--l" iconType="user" choices={dropdownChoices} title="My Choices" />);
    return utilityItems;
  };

  const dropdownChoices = [
    {
      text: 'Option 1',
      value: 'option-1'
    },
    {
      text: 'Option 2',
      value: 'option-2'
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
          <SprkMastheadLink element={Link} isSubNavLink to="/button">Item 1</SprkMastheadLink>,
          <SprkMastheadLink element={Link} isSubNavLink to="/button">Item 2</SprkMastheadLink>,
          <SprkMastheadLink element={Link} isSubNavLink to="/button">Item 3</SprkMastheadLink>,
        ]
    },
    {
      link: <SprkMastheadLink element='a' href="https://www.google.com" target="_blank" leadingIcon="landline" to="/button">(555) 555-5555</SprkMastheadLink>,
    },
    {
      link: <SprkMastheadLink element={Link} leadingIcon="call-team-member" to="/button">Talk to Us</SprkMastheadLink>,
    },
    {
      link: <SprkButton additionalClasses="sprk-c-Button--compact sprk-c-Button--full@sm" element={Link} to="/button" variant="secondary">Sign In</SprkButton>,
      additionalClasses: 'sprk-u-pam',
    }
  ];

  const narrowSelector = {
    choiceFunction: (choiceText) => {console.log(choiceText);},
    items: [
      {
        title: 'Selection Choice Title 1',
        information: 'Additional Information',
        value: 'selection-choice-1'
      },
      {
        title: 'Selection Choice Title 2',
        information: 'Additional Information',
        value: 'selection-choice-2'
      }
    ],
    footer: <SprkButton variant="tertiary" additionalClasses="sprk-c-Button--compact">Placeholder</SprkButton>
  };

  return (
    <EmptyLayout>
      <SprkMasthead
        littleNavSelector={narrowSelector}
        narrowSelector={narrowSelector}
        narrowNavLinks={narrowNavLinks}
        siteLogo={<SiteLogo />}
        utilityContents={getUtilityContents()}
        variant="extended"
      />
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

export default SprkMastheadExtendedDocs;
