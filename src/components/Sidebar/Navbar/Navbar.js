import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Navbar.css'; // Assuming you have a dedicated CSS file for Navbar styling

const Navbar = () => {
  const { isAuthenticated, userEmail } = useContext(GlobalContext);

  return (
    <div className="navbar">
      <ul>
        {isAuthenticated ? (
          <li>
            <p>Welcome, {userEmail}</p>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Login />
          </li>
        )}
        {/* Add other nav items here */}
      </ul>
    </div>
  );
};

export default Navbar;
