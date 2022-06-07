import React from 'react';

import Button from '../Button/Button';

export default function Header() {
  const nameButton = ['Sign In', 'Sign Up'];
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          News hell
        </a>
        <p className="h1 m-0">News site</p>
        <div>
          {
            nameButton.map((element) => <Button key={element} name={element} />)
          }
        </div>
      </div>
    </nav>
  );
}
