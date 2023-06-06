import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import '../css/App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
