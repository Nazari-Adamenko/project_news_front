import React, { memo } from 'react';
import { func, string } from 'prop-types';

import { Button } from 'react-bootstrap';

function ButtonAuthGroup({ name, openModal }) {
  return (
    <Button type="button" variant="primary" onClick={() => openModal(name)} className="me-1">{name}</Button>
  );
}

ButtonAuthGroup.propTypes = {
  name: string.isRequired,
  openModal: func.isRequired,
};

export default memo(ButtonAuthGroup);
