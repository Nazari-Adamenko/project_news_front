import React from 'react';

// import Card from './components/Card/Card';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

import './App.css';

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
