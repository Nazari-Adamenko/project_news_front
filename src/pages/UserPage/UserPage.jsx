import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import {
  togglePostModal,
  getUserData,
} from '../../redux/actions';

import ShowPosts from '../../components/ShowPosts/ShowPosts';
import Spinner from '../../components/Spinner/Spinner';
import Message from '../../components/Message/Message';

import './UserPage.css';
import userDefaultAvatar from '../../assets/img/avatar-user-default.svg';

function UserPage() {
  const userId = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUserToken = useSelector((state) => state.userData.currentUserToken);
  const currentUserId = useSelector((state) => state.userData.currentUserId);
  const isFetching = useSelector((state) => state.userData.isFetching);
  const error = useSelector((state) => state.userData.error);
  const isMyPage = currentUserId.id === currentUserToken.id;
  const isModal = useSelector((state) => state.posts.isShowModal);

  const currentUser = isMyPage ? currentUserToken : currentUserId;

  const toggleModificationModal = (event) => {
    dispatch(togglePostModal({ type: event.target.innerText, status: true }));
  };

  useEffect(() => {
    dispatch(getUserData(userId));
  }, [userId, isModal]);

  console.log(currentUserId);
  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }

  const backgroundAvatarUser = currentUser?.avatar?.url
    ? `${process.env.REACT_APP_API_URL}${currentUser.avatar.url}`
    : userDefaultAvatar;

  function userPosts() {
    return currentUserId?.posts?.length
      ? <ShowPosts posts={currentUserId.posts} />
      : <div className="text-center h1 w-100">Not news</div>;
  }

  return (
    <div className="row">
      <div className="news-user col-9 d-flex flex-wrap gap-5 pt-3 pb-3">
        {userPosts()}
      </div>
      <div className="data-user">
        <img src={backgroundAvatarUser} className="data-user__avatar" alt="User Avatar" />
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
          {(isMyPage && isLoggedIn)
            && (
              <>
                <Button className="btn btn-blue" onClick={toggleModificationModal}>Edit Profile</Button>
                <Button className="btn btn-blue" onClick={toggleModificationModal}>Add News</Button>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default memo(UserPage);
