import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import { getDataUser } from '../../redux/actions';
import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUser());
  }, []);
  const user = useSelector((state) => state.dataUser.dataUser);

  return (
    <div>
      <div className="news-user">{}</div>
      <div className="data-user d-flex flex-column justify-content-center">
        <div className="data-user__avatar">{}</div>
        <div className="data-user__name">{user.name}</div>
        <div className="data-user__email">{user.email}</div>
        <div className="data-user__button-bar button-bar d-flex">
          <Button className="btn btn-blue me-3">Edit Profile</Button>
          <Button className="btn btn-blue me-3">Add News</Button>
        </div>
      </div>
    </div>
  );
}

export default memo(UserPage);
