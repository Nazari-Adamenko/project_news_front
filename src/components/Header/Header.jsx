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

import './Header.css';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.userData.currentUser);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDataAuth());
    }
  }, []);

  const openModal = (name) => {
    dispatch(toggleModal({ status: true, type: name }));
  };

  const logoutUser = () => {
    dispatch(authLogout());
    navigate(ROUT_TO_MAIN);
  };

  const followLink = () => {
    navigate(`${ROUT_TO_USER}/${currentUser.id}`);
  };

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          News hell
        </Link>
        <p className="h1 m-0">News site</p>
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
                  <div
                    onClick={followLink}
                    onKeyPress={() => {}}
                    role="presentation"
                    className="user-avatar"
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
