import React, { memo } from 'react';

import PropTypes from 'prop-types';

import newsImg from '../../assets/img/152777-abstrakciya-uzor-abstraktnoe_iskusstvo-proizvedenie_iskusstva-fraktalnoe_iskusstvo-7680x4320.png';

import './Card.css';

function Card({ title, content, autour }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={newsImg} className="card-img-top" alt="..." />
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
  autour: PropTypes.string.isRequired,
};

export default memo(Card);
