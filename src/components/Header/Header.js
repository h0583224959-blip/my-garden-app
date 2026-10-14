import React from 'react';
import gardenMark from './garden-mark.svg';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <img className="garden-mark" src={gardenMark} alt="" />
        <div>
          <p className="header-eyebrow">פרחים שגדלים באהבה</p>
          <h1>הגינה שלי</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;