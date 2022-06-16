import React, { memo } from 'react';
import { ErrorMessage, useField } from 'formik';
import { string } from 'prop-types';

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
      <ErrorMessage className="mb-3" name={field.name} />
    </>
  );
}

TextField.propTypes = {
  label: string.isRequired,
};

export default memo(TextField);
