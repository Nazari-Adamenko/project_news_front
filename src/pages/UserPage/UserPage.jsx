import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import {
  callNewsCreationPage,
  getUserDataAuth,
  getUser,
  getUserData,
} from '../../redux/actions';

import ShowPosts from '../../components/ShowPosts/ShowPosts';
import { ROUT_TO_AUTH_USER } from '../../constants';

import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const userAuthId = useSelector((state) => state.auth.authUser);
  const userData = useSelector((state) => state.dataUser.userData);
  const userId = useParams();
  const initialButtonBar = userData.id === userAuthId.id;

  const showPageRedactionNews = () => {
    dispatch(callNewsCreationPage(true));
  };

  useEffect(() => {
    dispatch(getUser());
    if (userId.id !== ROUT_TO_AUTH_USER) {
      dispatch(getUserData(userId));
    } else dispatch(getUserDataAuth());
  }, [userId.id]);

  function userPosts() {
    return userData?.posts?.length
      ? <ShowPosts posts={userData?.posts} />
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
          <em>{userData?.name}</em>
        </div>
        <div className="data-user__email text-start w-100">
          <b>email:</b>
          {' '}
          <em>{userData?.email}</em>
        </div>
        <div className="data-user__button-bar justify-content-between w-100 d-flex">
          {initialButtonBar
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
