import React from 'react';

import Header from './components/Header/Header';
import AuthModal from './components/ModalAuth/ModalAuth';
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainPage />
        <AuthModal />
      </div>
    </>
  );
}
