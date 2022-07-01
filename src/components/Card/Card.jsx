import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';

import newsImg from '../../assets/img/news_default_img.png';

import './Card.css';

function Card({
  title,
  content,
  author,
  image,
  tag,
}) {
  const backgroundImagePost = image.url
    ? `${process.env.REACT_APP_API_URL}${image.url}`
    : newsImg;
  return (
    <div className="card">
      <img src={backgroundImagePost} className="card-img-top h-50" alt="failed to load" />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title h3 text-uppercase text-truncate m-0">{title}</p>
        <p className="card-text">{content}</p>
      </div>
      <div className="px-2">
        {author.name && (
          <Link to={`user/${author.id}`}>
            Author:
            {' '}
            {author.name}
          </Link>
        )}
        <div>
          <p className="fs-6 fw-lighter fst-italic mb-0">{author.email}</p>
          <p className="fs-6 fw-lighter fst-italic mb-0">
            Category:
            {' '}
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  tag: string.isRequired,
  author: shape({}),
  image: shape({}),
};

Card.defaultProps = {
  author: {},
  image: {},
};

export default memo(Card);
