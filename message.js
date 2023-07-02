import React, { useState } from 'react';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        username: randomUser,
        content: message,
        likes: 0
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...chatMessages];
    updatedMessages[index].likes += 1;
    setChatMessages(updatedMessages);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <button onClick={handleSendClick}>Send</button>
      </div>

      <div>
        {chatMessages.map((message, index) => (
          <div key={index}>
            <span>{message.username}: {message.content}</span>
            <button onClick={() => handleLikeClick(index)}>Like ({message.likes})</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
