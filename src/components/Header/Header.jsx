import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { toggleModal, authLogout } from '../../redux/actions';
import { SIGN_IN, SIGN_UP } from '../../constants';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const openModal = (name) => {
    dispatch(toggleModal({ status: true, type: name }));
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    dispatch(authLogout());
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
                  <div className="user-avatar" />
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
