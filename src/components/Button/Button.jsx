import React, { memo } from 'react';
import { func, string } from 'prop-types';

function Button({ name, openModal }) {
  return (
    <button type="button" onClick={openModal(name)} className="btn btn-primary me-1">{name}</button>
  );
}

Button.propTypes = {
  name: string.isRequired,
  openModal: func.isRequired,
};

export default memo(Button);
