import React, { memo } from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

function Spinner() {
  return (
    <ProgressBar className="w-100" animated now={100} label="Loading" />
  );
}

export default memo(Spinner);
