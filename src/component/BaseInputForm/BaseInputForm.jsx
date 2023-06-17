import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const BaseInputForm = ({ handleSubmitForm, children }) => {
  const initialValues = { name: '', amount: '', date: '', category: '' };

  const handleSubmit = (values, setSubmitting) => {
    console.log(values);
    setSubmitting(false);
    console.log(handleSubmitForm);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validate={(values) => this.validate(values)}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({
          //   values,
          //   errors,
          //   touched,
          //   handleChange,
          //   handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {children}
            <input type="submit" value="Submit" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

BaseInputForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseInputForm;
