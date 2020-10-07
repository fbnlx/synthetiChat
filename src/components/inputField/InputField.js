import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../actions/messages';

import './InputField.scss';

const InputField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const isChatActive = useSelector((state) => state.message.activeConversation);
  const user = useSelector((state) => state.user.userData);
  const activeFriend = useSelector((state) => state.message.activeConversation);
  const messages = useSelector((state) => state.message.messages);

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    if (evt.key === 'Enter' && input && input.replace(/\s/g, '').length) {
      const newMessage = {
        id: messages.length + 1,
        content: input,
        owner: user.id,
        recipient: activeFriend,
        date: Math.round(new Date().getTime() / 1000),
      };
      dispatch(sendMessage(newMessage));
      setInput('');
    }
  };

  return (
    <div className="input-container">
      {isChatActive && (
        <input
          value={input}
          onChange={handleInput}
          onKeyDown={handleSubmit}
          placeholder="Type something..."
        />
      )}
    </div>
  );
};

export default InputField;
