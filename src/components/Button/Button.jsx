import React, { memo } from 'react';
import { func, string } from 'prop-types';

function Button({ name, actionButton }) {
  return (
    <button onClick={() => actionButton(name)} type="button" className="btn btn-primary me-1">{name}</button>
  );
}

Button.propTypes = {
  name: string.isRequired,
  actionButton: func.isRequired,
};

export default memo(Button);
