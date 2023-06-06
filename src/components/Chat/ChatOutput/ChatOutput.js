import React, { useEffect, useRef } from 'react';
import './ChatOutput.css';

function ChatOutput({ messages }) {
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="chat-output">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                    <p>{message.text}</p>
                </div>
            ))}
            <div ref={endOfMessagesRef} />
        </div>
    );
}

export default ChatOutput;
