import React, { memo } from 'react';

function Spinner() {
  const spinnerStyle = 'progress-bar progress-bar-striped progress-bar-animated';
  return (
    <div className="progress">
      <div className={spinnerStyle} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        Loading...
      </div>
    </div>
  );
}

export default memo(Spinner);
