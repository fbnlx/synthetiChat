import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import './ChatDisplay.scss';

const ChatDisplay = () => {
  console.log(moment.unix(1602032261).format('MM/DD/YYYY hh:mm:ss'));
  const [activeMessages, setActiveMessages] = useState([]);
  const messages = useSelector((state) => state.message.messages);
  const activeFriend = useSelector((state) => state.message.activeConversation);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    console.log(document.getElementsByClassName('chat__container')[0]);
    document.getElementsByClassName('chat__container')[0].scrollTo(0, 817)
    window.scrollTo(0, 817);
  }, []);

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
    <div className="chat__container">
      {activeMessages &&
        activeMessages.map((message) => (
          <div key={message.id} className={`chat__bubble ${message.owner === 6 ? 'own' : 'friend'}`}>
            <span className={`chat__bubble-timestamp ${message.owner === 6 ? 'own' : 'friend'}`}>
              {moment.unix(message.date).format('lll')}
            </span>
            {message.content}
          </div>
        ))}
    </div>
  );
};

export default ChatDisplay;
