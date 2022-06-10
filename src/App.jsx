import React from 'react';

import Header from './components/Header/Header';
import ModalAuth from './components/ModalAuth/ModalAuth';
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainPage />
        <ModalAuth />
      </div>
    </>
  );
}
