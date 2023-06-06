import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ text, delay = 0 }) => (
  <div 
    className="sidebar-item" 
    style={{ animationDelay: `${delay}s` }}
  >
    {text}
  </div>
);

export default SidebarItem;

