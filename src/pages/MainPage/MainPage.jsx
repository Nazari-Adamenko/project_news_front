import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Message from '../../components/Message/Message';

import { getPosts } from '../../redux/actions';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);
  const { error } = useSelector((state) => state.posts);
  const { isFetching } = useSelector((state) => state.posts);

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }

  return (
    <div className="d-flex flex-wrap gap-5 pt-3 pb-3">
      {posts.map(({
        id,
        title,
        content,
        tag,
        userId,
      }) => (
        <Card
          key={id}
          title={title}
          content={content}
          tag={tag}
          author={userId}
        />
      ))}
    </div>
  );
}

export default memo(MainPage);
