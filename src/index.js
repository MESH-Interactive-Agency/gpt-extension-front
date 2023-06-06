import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
