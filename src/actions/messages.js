export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_ACTIVE_CONVERSATION = 'SET_ACTIVE_CONVERSATION';
export const SEND_MESSAGE = 'ADD_MESSAGE';

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
