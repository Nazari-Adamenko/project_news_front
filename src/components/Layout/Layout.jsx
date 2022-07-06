import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import AuthModal from '../AuthModal/AuthModal';
import UserModal from '../UserModal/UserModal';

import './Layout.css';

function Layout() {
  return (
    <div className="h-100">
      <div className="min-vh-100 d-flex flex-column">
        <header>
          <Header />
          <AuthModal />
          <UserModal />
        </header>
        <div className="container flex-grow-1">
          <Outlet />
        </div>
        <footer>
          <div className="text-center">
            IBS Dunice 2022.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default memo(Layout);
