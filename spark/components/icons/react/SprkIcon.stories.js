import React from 'react';

import SprkIcon from './SprkIcon';

export default {
  title: 'Components|Icons',
  component: SprkIcon,
};

export const amountMoney = () => (
  <SprkIcon iconName="amount-money" additionalClasses="sprk-c-Icon--l" />
);

amountMoney.story = {
  name: 'amount-money',
};

export const access = () => <SprkIcon iconName="access" additionalClasses="sprk-c-Icon--l" />;

export const applyNow = () => <SprkIcon iconName="apply-now" additionalClasses="sprk-c-Icon--l" />;

applyNow.story = {
  name: 'apply-now',
};
