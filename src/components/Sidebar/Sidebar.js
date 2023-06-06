import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import './Sidebar.css';

const SIDEBAR_ANIMATION_DELAY = 0.2; // seconds

const Sidebar = () => {
  const conversations = [
    'Conversation 1',
    'Conversation 2',
    'Conversation 3',
    'Conversation 4',
    'Conversation 5',
    'Conversation 6',
    'Conversation 7',
    'Conversation 8',
    'Conversation 9',
    'Conversation 10',
    'Conversation 11',
    'Conversation 12',
  ];

  return (
    <div className="sidebar">
      {conversations.map((conversation, i) => (
        <SidebarItem
          key={i}
          text={conversation}
          delay={i * 0.2 + SIDEBAR_ANIMATION_DELAY}
        />
      ))}
    </div>
  );
};

export default Sidebar;
