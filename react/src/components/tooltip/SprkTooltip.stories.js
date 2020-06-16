import React from 'react';
import SprkTooltip from './SprkTooltip';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  component: SprkTooltip,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkTooltip'],
    info: `${markdownDocumentationLinkBuilder('tooltip')}`,
  },
};

export const defaultStory = () => (
  <SprkTooltip iconAdditionalClasses='sprk-c-Icon--filled'>
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
    ullamco deserunt aute id dee doo da fauxet la gigman roo.
  </SprkTooltip>
);

defaultStory.story = {
  name: 'Default',
};

export const cornersStory = () => (
  <>
    <span style={{ position: 'absolute', left: '5%', top: '5%' }}>
      <SprkTooltip isDefaultToggled={true} iconAdditionalClasses='sprk-c-Icon--filled'>Top left</SprkTooltip>
    </span>
    <span style={{ position: 'absolute', left: '55%', top: '5%' }}>
      <SprkTooltip isDefaultToggled={true} iconAdditionalClasses='sprk-c-Icon--filled'>Top rigth</SprkTooltip>
    </span>
    <span style={{ position: 'absolute', left: '5%', top: '55%' }}>
      <SprkTooltip isDefaultToggled={true} iconAdditionalClasses='sprk-c-Icon--filled'>bttom left</SprkTooltip>
    </span>
    <span style={{ position: 'absolute', left: '55%', top: '55%' }}>
      <SprkTooltip isDefaultToggled={true} iconAdditionalClasses='sprk-c-Icon--filled'>bottom right</SprkTooltip>
    </span>
  </>
);

cornersStory.story = {
  name: 'Corners',
};
