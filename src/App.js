import React from 'react';
import { useDispatch } from 'react-redux';
import FriendList from './components/FriendList';
import ChatDisplay from './components/ChatDisplay';

import { setFriends, setUserData } from './actions/users';
import { messages, users } from '../data';
import { setMessages } from './actions/messages';

import './App.scss';
import InputField from './components/inputField';
import User from './components/User';

const App = () => {
  const dispatch = useDispatch();
  dispatch(setUserData(users.find((u) => u.id === 6)));
  dispatch(setFriends(users.filter((u) => u.id !== 6)));
  dispatch(setMessages(messages));

  return (
    <div className="app-container">
      <FriendList />
      <div className="app__center">
        <ChatDisplay />
        <InputField />
      </div>
      <User />
    </div>
  );
};

export default App;
