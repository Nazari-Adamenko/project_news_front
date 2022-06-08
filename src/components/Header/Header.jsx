import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';

import { getModal } from '../../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const nameButton = ['Sign In', 'Sign Up'];

  const openModal = (name) => {
    dispatch(getModal({ status: true, type: name }));
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
            nameButton.map((element) => (
              <Button
                openModal={openModal}
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
