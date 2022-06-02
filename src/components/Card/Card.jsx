import React from 'react';

export default function Card() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="h3 m-0">{ }</p>
        <p className="card-text">{ }</p>
        <p className="h6">{ }</p>
      </div>
    </div>
  );
}
