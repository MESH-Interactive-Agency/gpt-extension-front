import React from 'react';

const Conversation = ({ name, index }) => {
  const handleClick = () => {
    window.chrome.runtime.sendMessage(
      {
        message: 'activate_conversation',
        index: index,
      },
      (response) => {
        console.log(response);
      }
    );
  };

  return <button onClick={handleClick}>{name}</button>;
};

export default Conversation;
