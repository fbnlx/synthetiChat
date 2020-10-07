import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import './ChatDisplay.scss';

const ChatDisplay = () => {
  const [activeMessages, setActiveMessages] = useState([]);
  const messages = useSelector((state) => state.message.messages);
  const activeFriend = useSelector((state) => state.message.activeConversation);
  const user = useSelector((state) => state.user.userData);

  const chatRef = useRef();

  useEffect(() => {
    chatRef.current && chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [activeMessages]);

  useEffect(() => {
    if (messages && activeFriend && user) {
      setActiveMessages(
        messages
          .filter(
            (message) =>
              (message.owner === activeFriend && message.recipient === user.id) ||
              (message.owner === user.id && message.recipient === activeFriend)
          )
          .sort((a, b) => a.date - b.date)
      );
    }
  }, [messages, activeFriend, user]);

  return (
    <div ref={chatRef} className={`chat__container ${!activeFriend ? 'empty' : ''}`}>
      {activeMessages &&
        activeMessages.map((message) => (
          <div key={message.id} className={`chat__bubble ${message.owner === 6 ? 'own' : 'friend'}`}>
            <span className={`chat__bubble-timestamp ${message.owner === 6 ? 'own' : 'friend'}`}>
              {moment.unix(message.date).format('lll')}
            </span>
            {message.content}
          </div>
        ))}
      {!activeFriend && <div className="chat__empty-text">Select a friend and start a conversation!</div>}
    </div>
  );
};

export default ChatDisplay;
