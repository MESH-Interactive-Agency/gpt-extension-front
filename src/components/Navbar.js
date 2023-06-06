import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Navbar() {
  const { isAuthenticated, userEmail } = useContext(GlobalContext);

  return (
    <nav>
      <div className="navbar-brand">Dr. Bretto's Secret Lab</div>
      <div>
        {isAuthenticated ? (
          <span>Welcome, {userEmail}</span>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
