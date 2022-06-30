import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import {
  togglePostModal,
  getUser,
  getUserData,
} from '../../redux/actions';

import ShowPosts from '../../components/ShowPosts/ShowPosts';
import Spinner from '../../components/Spinner/Spinner';
import Message from '../../components/Message/Message';

import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.authUser);
  const currentUser = useSelector((state) => state.userData.currentUser);
  const isFetching = useSelector((state) => state.userData.isFetching);
  const error = useSelector((state) => state.userData.error);
  const userId = useParams();
  const isInitialButtonBar = currentUser.id === authUser.id;

  const showPageRedactionNews = () => {
    dispatch(togglePostModal(true));
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserData(userId));
  }, [userId.id]);

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }

  function userPosts() {
    return currentUser?.posts?.length
      ? <ShowPosts posts={currentUser?.posts} />
      : <div className="text-center h1 w-100">Not news</div>;
  }

  return (
    <div className="row">
      <div className="news-user col-9 d-flex flex-wrap gap-5 pt-3 pb-3">
        {userPosts()}
      </div>
      <div className="data-user d-flex flex-column align-items-center p-3 gap-4 bg-light mt-3 col">
        <div className="data-user__avatar" />
        <div className="data-user__name text-start w-100">
          <b>name:</b>
          {' '}
          <em>{currentUser?.name}</em>
        </div>
        <div className="data-user__email text-start w-100">
          <b>email:</b>
          {' '}
          <em>{currentUser?.email}</em>
        </div>
        <div className="data-user__button-bar justify-content-between w-100 d-flex">
          {isInitialButtonBar
            && (
              <>
                <Button className="btn btn-blue">Edit Profile</Button>
                <Button className="btn btn-blue" onClick={showPageRedactionNews}>Add News</Button>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default memo(UserPage);
