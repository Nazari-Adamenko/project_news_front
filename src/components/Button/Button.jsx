import React from 'react';
import { string } from 'prop-types';

export default function Button({ name }) {
  return (
    <button type="button" className="btn btn-primary me-1">{name}</button>
  );
}

Button.propTypes = {
  name: string.isRequired,
};
