import {
  SEND_MESSAGE,
  SET_MESSAGES,
  SET_ACTIVE_CONVERSATION,
  SET_ACTIVE_MESSAGES,
} from '../actions/messages';

const initialState = { messages: [], activeConversation: null, activeMessages: {} };

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
    case SET_ACTIVE_MESSAGES:
      const newActiveMessages = { ...state.activeMessages };
      newActiveMessages[action.payload.id] = action.payload.content;
      return {
        ...state,
        activeMessages: newActiveMessages,
      };
    default:
      return state;
  }
};

export default messageReducer;
