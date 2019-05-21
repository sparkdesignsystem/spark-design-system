import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkAlert } from '@sparkdesignsystem/spark-react';

storiesOf('Alert', module)
  .add('test', () => (
    <SprkAlert
      message="This is important information."
      onDismiss={()=> { this.setState({ isVisibleInfoAlert: false }); }}
      isVisible={this.state.isVisibleInfoAlert}
      variant="info"
      idString="alert-info-1"
      analyticsString="alert" />
  ));