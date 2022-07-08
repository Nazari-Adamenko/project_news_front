import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { toggleModal, authLogout, getUserDataAuth } from '../../redux/actions';
import {
  SIGN_IN,
  SIGN_UP,
  ROUT_TO_USER,
  ROUT_TO_MAIN,
} from '../../constants';
import SearchForm from '../SearchForm/SearchForm';

import './Header.css';
import userDefaultAvatar from '../../assets/img/avatar-user-default.svg';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authUser = useSelector((state) => state.auth.authUser);
  const currentUserToken = useSelector((state) => state.userData.currentUserToken);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDataAuth());
    }
  }, [authUser]);

  const openModal = (name) => {
    dispatch(toggleModal({ status: true, type: name }));
  };

  const logoutUser = () => {
    dispatch(authLogout());
    navigate(ROUT_TO_MAIN);
  };

  const followLink = () => {
    navigate(`${ROUT_TO_USER}/${currentUserToken.id}`);
  };

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          News hell
        </Link>
        <SearchForm />
        <div>
          {
            !isLoggedIn
              ? (
                <>
                  <Button className="me-3 " onClick={() => openModal(SIGN_IN)}>{SIGN_IN}</Button>
                  <Button onClick={() => openModal(SIGN_UP)}>{SIGN_UP}</Button>
                </>
              )
              : (
                <div className="d-flex">
                  <img
                    src={userDefaultAvatar}
                    onClick={followLink}
                    onKeyPress={() => {}}
                    role="presentation"
                    className="user-avatar"
                    alt="User Avatar"
                  />
                  <Button
                    type="button"
                    onClick={logoutUser}
                    variant="primary"
                  >
                    Logout
                  </Button>
                </div>
              )
          }
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
