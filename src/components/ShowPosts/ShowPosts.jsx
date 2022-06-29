import React, { memo } from 'react';
import { shape } from 'prop-types';

import Card from '../Card/Card';

function ShowPosts({ posts }) {
  return (
    posts.map(({
      id,
      title,
      content,
      tags,
      image,
      user,
    }) => (
      <Card
        key={id}
        title={title}
        content={content}
        tag={tags}
        author={user}
        image={image}
      />
    ))
  );
}

ShowPosts.propTypes = {
  props: shape({}),
};

ShowPosts.defaultProps = {
  author: {},
};

export default memo(ShowPosts);
