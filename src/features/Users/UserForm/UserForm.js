import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { subscriptionTypes } from 'common/constants';

const Error = styled.div`
  color: #f00;
`;

class MyForm extends Component {
  componentDidUpdate() {
    const { additionalError, status, resetForm } = this.props;
    if (status === 'sending' && !additionalError) {
      resetForm();
    }
  }

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      resetForm,
      additionalError,
      status,
    } = this.props;
    return (
      <Fragment>
        {additionalError && status === 'sending' && (
          <Error>This email is currently exist</Error>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="subscription">Subscription type</label>
            <select
              id="subscription"
              name="subscription"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subscription}
            >
              {subscriptionTypes.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
          <button type="button" onClick={() => resetForm()}>
            Reset
          </button>
        </form>
      </Fragment>
    );
  }
}

export const UserForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    subscription: subscriptionTypes[0].id,
  }),

  handleSubmit: (values, { props, setStatus, setSubmitting }) => {
    props.addUser(values);
    setStatus('sending');
    setSubmitting(false);
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('E-mail is not valid')
      .required('E-mail is required'),
    name: yup
      .string()
      .matches(/^([A-Za-z])+$/, 'Name should contain only latin symbols')
      .max(60, 'Name has not to be longer than 60 characters')
      .required('Name is required'),
  }),
})(MyForm);
