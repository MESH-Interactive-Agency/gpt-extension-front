import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import Sidebar from '../components/Sidebar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Create context
const AppContext = React.createContext();

// Header component
const Header = () => {
  return <h1 className="text-center">Dr. Bretto's Secret Lab</h1>;
};

// Login Page
const LoginPage = () => {
  return <h1>Login Page</h1>;
};

// Main Content component
const MainContent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <h1>Hello World!</h1>
      {/* Insert content here */}
    </div>
  );
};

// Main App component
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <div className="App d-flex flex-column h-100 border p-2 container">
            <Header />
            <div className="d-flex flex-grow-1">
              <Navbar className="devborder " />
              <MainContent className="devborder " />
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
