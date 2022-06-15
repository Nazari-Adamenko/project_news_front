import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { toggleModal, authLogout } from '../../redux/actions';

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
        <a className="navbar-brand" href="/">
          News hell
        </a>
        <p className="h1 m-0">News site</p>
        <div>
          {
            !isLoggedIn
              ? (
                <>
                  <Button className="me-3" onClick={() => openModal('Sign In')}>Sign In</Button>
                  <Button onClick={() => openModal('Sign Up')}>Sign Up</Button>
                </>
              )
              : (
                <>
                  <Image
                    className="me-3 bg-dark text-white"
                    roundedCircle
                    alt="image"
                  />
                  <Button
                    type="button"
                    onClick={logoutUser}
                    variant="primary"
                  >
                    Logout
                  </Button>
                </>
              )
          }
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
