import React, { memo } from 'react';
import { ErrorMessage, useField } from 'formik';
import { string } from 'prop-types';

import './TextField.css';

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="d-block" htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className="error-message text-danger"><ErrorMessage name={field.name} /></div>
    </>
  );
}

TextField.propTypes = {
  label: string.isRequired,
};

export default memo(TextField);
