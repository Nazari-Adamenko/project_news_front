import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Message from '../../components/Message/Message';
import './MainPage.css';

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
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }

  return (
    <div className="d-flex flex-wrap">
      {posts.map(({
        id, title, content, tag, userId,
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
