import { SET_FRIENDS, SET_USER_DATA } from '../actions/users';

const initialState = { friends: [], userData: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
