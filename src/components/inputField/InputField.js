import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, setActiveMessages } from '../../actions/messages';

import './InputField.scss';

const InputField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const isChatActive = useSelector((state) => state.message.activeConversation);
  const user = useSelector((state) => state.user.userData);
  const activeFriend = useSelector((state) => state.message.activeConversation);
  const messages = useSelector((state) => state.message.messages);
  const activeMessages = useSelector((state) => state.message.activeMessages);

  const handleInput = (evt) => {
    setInput(evt.target.value);
    const newActiveMessage = {
      id: activeFriend,
      content: evt.target.value,
    };
    dispatch(setActiveMessages(newActiveMessage));
  };

  useEffect(() => {
    setInput(activeMessages[activeFriend] || '');
  }, [activeFriend]);

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
      dispatch(setActiveMessages({ id: activeFriend, content: '' }));
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
