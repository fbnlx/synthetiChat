import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import './index.scss';
import messageReducer from './reducers/messages';
import userReducer from './reducers/users';

const mountNode = document.getElementById('app');

const rootReducer = combineReducers({ message: messageReducer, user: userReducer });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
