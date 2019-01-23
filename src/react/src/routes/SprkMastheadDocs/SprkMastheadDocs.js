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
  return (
    <EmptyLayout>
      <SprkMasthead siteLogo={<SiteLogo />} utilityContents={getUtilityContents()}/>
    </EmptyLayout>
  );
}

export default SprkMastheadDocs;