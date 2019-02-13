import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { SprkButton, SprkTextInput } from '@sparkdesignsystem/spark-core-react';

class FormikExample extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          isValid,
        }) => (
          <Form>
            <Field
              name="name"
              validate={value => value !== 'Rob' ? 'Enter the right name.' : undefined}
              render={({ field /* _form */ }) => (
                <SprkTextInput
                  label="Name"
                  valid={touched.name && errors.name && errors.name.length === 0}
                  value={values.name}
                  placeholder="Enter your first name"
                  errorMessage={errors.name}
                  {...field}
                />
              )}
            />

            <Field
              name="email"
              validate={value => value !== 'sparkdesignsystem@quickenloans.com' ? 'Enter the right email.' : undefined}
              render={({ field /* _form */ }) => (
                <SprkTextInput
                  label="Email"
                  type="email"
                  valid={touched.email && errors.email && errors.email.length === 0}
                  value={values.email}
                  placeholder="email@example.com"
                  errorMessage={errors.email}
                  {...field}
                />
              )}
            />

            <SprkButton type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </SprkButton>
          </Form>
        )}
      </Formik>
    );
  }
}

FormikExample.propTypes = {};

export default FormikExample;
