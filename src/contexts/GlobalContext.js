// GlobalContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const loginUser = async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        'https://gpt-extension-back.onrender.com/api/auth/login',
        credentials
      );
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      setIsLoggedIn(true);
      setError(null);
      // If login is successful:
      setIsLoggedIn(true);
      setUser(credentials.email); // store the user's email
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const registerUser = async (userCredentials) => {
    try {
      console.log('Sending user data to server: ', userCredentials); // Log the user data
      const response = await axios.post(
        'https://gpt-extension-back.onrender.com/api/users',
        userCredentials
      );
      console.log('Server response: ', response); // Log the server response
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      setIsLoggedIn(true);
      setError(null);
    } catch (error) {
      console.error('Error occurred when registering user: ', error); // Log the error
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, user, loginUser, registerUser, error }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
