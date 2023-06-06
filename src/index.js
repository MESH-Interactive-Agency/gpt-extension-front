import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import './css/Animations.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
