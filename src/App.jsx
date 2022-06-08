import React from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </>
  );
}
