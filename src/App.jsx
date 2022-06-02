import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card />
      </div>
    </>
  );
}
