import React, { memo } from 'react';

import PropTypes from 'prop-types';

function Card({ title, content, autour }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="h3 m-0">{ title }</p>
        <p className="card-text">{ content }</p>
        <p className="h6">{ autour }</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // tag: PropTypes.string.isRequired,
  autour: PropTypes.string.isRequired,
};

export default memo(Card);
