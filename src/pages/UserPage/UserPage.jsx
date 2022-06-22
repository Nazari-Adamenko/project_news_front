import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from '../../components/Card/Card';

import { getDataUser, getUser } from '../../redux/actions';
import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const userAuthId = useSelector((state) => state.auth.authUser.id);
  const userData = useSelector((state) => state.dataUser.dataUser);
  const userId = useParams();
  const initialButtonBar = userData.id === userAuthId;

  useEffect(() => {
    dispatch(getDataUser(userId));
  }, []);

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  return (
    <div className="row">
      <div className="news-user col-9 d-flex flex-wrap gap-5 pt-3 pb-3">
        {userData?.posts?.length
          ? userData.posts.map(({
            id,
            title,
            content,
            tags,
            user,
          }) => (
            <Card
              key={id}
              title={title}
              content={content}
              tag={tags}
              author={user}
            />
          ))
          : <div className="text-center h1 w-100">Not news</div>}
      </div>
      <div className="data-user d-flex flex-column align-items-center p-3 gap-4 bg-light mt-3 col">
        <div className="data-user__avatar">{ }</div>
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
              <Button className="btn btn-blue">Add News</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(UserPage);
