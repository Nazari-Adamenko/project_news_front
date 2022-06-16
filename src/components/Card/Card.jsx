import React, { memo } from 'react';

import { string } from 'prop-types';

import newsImg from '../../assets/img/news_default_img.png';

import './Card.css';

function Card({ title, content, author }) {
  return (
    <div className="card">
      <img src={newsImg} className="card-img-top" alt="failed to load" />
      <div className="card-body">
        <p className="h3 m-0">{title}</p>
        <p className="card-text">{content}</p>
        <p className="h6">{author}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  author: string,
};

Card.defaultProps = {
  author: '',
};

export default memo(Card);
