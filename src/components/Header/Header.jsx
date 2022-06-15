import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import ButtonAuthGroup from '../ButtonAuthGroup/ButtonAuthGroup';

import { getModal, destroyUser } from '../../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const nameButton = ['Sign In', 'Sign Up'];

  const openModal = (name) => {
    dispatch(getModal({ status: true, type: name }));
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutUser = () => {
    localStorage.removeItem('token');
    dispatch(destroyUser());
  };

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          News hell
        </a>
        <p className="h1 m-0">News site</p>
        <div>
          {!isLoggedIn
            ? nameButton.map((element) => (
              <ButtonAuthGroup
                openModal={openModal}
                key={element}
                name={element}
              />
            ))
            : (
              <>
                <Image className="me-3 bg-dark text-white" roundedCircle alt="image" />
                <Button type="button" onClick={logoutUser} variant="primary">Logout</Button>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
