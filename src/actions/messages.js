export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_ACTIVE_CONVERSATION = 'SET_ACTIVE_CONVERSATION';
export const SEND_MESSAGE = 'ADD_MESSAGE';
export const SET_ACTIVE_MESSAGES = 'SET_ACTIVE_MESSAGES';

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    payload: messages,
  };
};

export const setActiveConversation = (friend) => {
  return {
    type: SET_ACTIVE_CONVERSATION,
    payload: friend,
  };
};

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};

export const setActiveMessages = (message) => {
  return {
    type: SET_ACTIVE_MESSAGES,
    payload: message,
  };
};
