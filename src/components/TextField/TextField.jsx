import React, { memo } from 'react';
import { ErrorMessage, useField } from 'formik';
import { string } from 'prop-types';

import { Form, InputGroup } from 'react-bootstrap';

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Label htmlFor={field.name}>{`Add ${label}`}</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          className={`shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <Form.Control.Feedback className="end-0" type="invalid" tooltip>
          <ErrorMessage name={field.name} />
        </Form.Control.Feedback>
      </InputGroup>
    </>
  );
}

TextField.propTypes = {
  label: string.isRequired,
};

export default memo(TextField);
