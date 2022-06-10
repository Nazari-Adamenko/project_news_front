import React, { memo } from 'react';
import { func, string } from 'prop-types';

import { Button } from 'react-bootstrap';

function ButtonAuthGroup({ name, openModal }) {
  return (
    <Button type="button" onClick={() => openModal(name)} className="btn btn-primary me-1">{name}</Button>
  );
}

ButtonAuthGroup.propTypes = {
  name: string.isRequired,
  openModal: func.isRequired,
};

export default memo(ButtonAuthGroup);
