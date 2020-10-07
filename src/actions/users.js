export const SET_FRIENDS = 'SET_FRIENDS';
export const SET_USER_DATA = 'SET_USER_DATA';

export const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    payload: friends,
  };
};

export const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
};
