import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';

import { getModalRegistration, getModalAutorotation } from '../../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const nameButton = ['Sign In', 'Sign Up'];

  const openModal = (type) => {
    type === nameButton[0]
      ? dispatch(getModalRegistration())
        : dispatch(getModalAutorotation()),
  };

  const {
    // isOpen,
    typeModal,
  } = useSelector((state) => state);

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          News hell
        </a>
        <p className="h1 m-0">News site</p>
        <div>
          {
            nameButton.map((element) => (
              <Button
                actionButton={openModal}
                type={typeModal}
                key={element}
                name={element}
              />
            ))
          }
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
