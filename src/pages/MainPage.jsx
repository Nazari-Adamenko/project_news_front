import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShowPosts from '../components/ShowPosts/ShowPosts';

import { getPosts } from '../redux/actions';
import Notification from '../components/Notification/Notification';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const isFetching = useSelector((state) => state.posts.isFetching);

  function allPosts() {
    return posts !== null
      ? <ShowPosts posts={posts} />
      : <div className="text-center h1 w-100">Not posts</div>;
  }

  return (
    <div className="d-flex flex-wrap gap-5 pt-3 pb-3">
      {isFetching
        ? (
          <Notification
            isFetching={isFetching}
            error={error}
          />
        )
        : allPosts()}
    </div>
  );
}

export default memo(MainPage);
