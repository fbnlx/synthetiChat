import { SEND_MESSAGE, SET_MESSAGES, SET_ACTIVE_CONVERSATION } from '../actions/messages';

const initialState = { messages: [], activeConversation: null };

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case SET_ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.payload,
      };
    case SEND_MESSAGE:
      const updatedMessages = [...state.messages];
      updatedMessages.push(action.payload);
      return {
        ...state,
        messages: updatedMessages,
      };
    default:
      return state;
  }
};

export default messageReducer;
