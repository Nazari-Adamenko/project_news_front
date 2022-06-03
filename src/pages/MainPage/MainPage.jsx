import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';

import { getPosts } from '../../redux/actions';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const {
    posts,
    error,
    isFetching,
  } = useSelector((state) => state.posts);

  if (isFetching) {
    return 'Loading...';
  }
  if (error) {
    console.error(error);
  }

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          content={post.content}
          tag={post.tag}
          autour={post.user_id}
        />
      ))}
    </>
  );
}
