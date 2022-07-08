import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message/Message';
import ShowPosts from '../components/ShowPosts/ShowPosts';
import Spinner from '../components/Spinner/Spinner';

import { getPosts } from '../redux/actions';

function MainPage() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const isFetching = useSelector((state) => state.posts.isFetching);
  const { search } = useSelector((state) => state.posts.queryString);

  useEffect(() => {
    dispatch(getPosts());
  }, [search]);

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }

  return (
    <div className="d-flex flex-wrap gap-5 pt-3 pb-3">
      {posts !== null
        ? <ShowPosts posts={posts} />
        : <div className="text-center h1 w-100">Not posts</div>}
    </div>
  );
}

export default memo(MainPage);
