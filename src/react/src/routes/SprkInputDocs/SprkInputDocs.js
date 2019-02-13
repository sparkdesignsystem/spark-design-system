import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import FormExample from './FormExample/FormExample';
import FormikExample from './FormikExample/FormikExample';

const SprkInputDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer heading="Form Example">
      <FormExample />
    </ExampleContainer>
    <ExampleContainer heading="Formik Example">
      <FormikExample />
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkInputDocs;
