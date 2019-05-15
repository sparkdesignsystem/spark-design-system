import React from 'react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';
import FormExample from './FormExample/FormExample';
import FormikExample from './FormikExample/FormikExample';

function FormExamples() {
  return (
    <React.Fragment>
      <ExampleContainer heading="Form Example">
        <FormExample />
      </ExampleContainer>
      <ExampleContainer heading="Formik Example">
        <FormikExample />
      </ExampleContainer>
    </React.Fragment>
  );
}

export default FormExamples;
