import React from 'react';

export default function Spinner() {
  const spinnerStyle = 'progress-bar progress-bar-striped progress-bar-animated';
  return (
    <div className="progress">
      <div className={spinnerStyle} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
        Loading...
      </div>
    </div>
  );
}
