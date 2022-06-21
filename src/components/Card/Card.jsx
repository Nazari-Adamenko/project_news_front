import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';

import newsImg from '../../assets/img/news_default_img.png';

import './Card.css';

function Card({ title, content, author }) {
  return (
    <div className="card">
      <img src={newsImg} className="card-img-top" alt="failed to load" />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="h3 m-0">{title}</p>
        <p className="card-text">{content}</p>
      </div>
      <div className="px-2">
        {author.name && (
        <Link className="" to={`user/${author.id}`}>
          Author:
          {' '}
          {author.name}
        </Link>
        )}
        <p className="fs-6 fw-lighter fst-italic mb-0">{author.email}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  author: shape({}),
};

Card.defaultProps = {
  author: {},
};

export default memo(Card);
