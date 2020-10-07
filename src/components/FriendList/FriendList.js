import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveConversation } from '../../actions/messages';

import './FriendList.scss';

const FriendList = () => {
  const dispatch = useDispatch();
  const friendList = useSelector((state) => state.user.friends);
  const activeFriend = useSelector((state) => state.message.activeConversation);

  const handleClick = (friendId) => {
    dispatch(setActiveConversation(friendId));
  };

  return (
    <div className="friend-list__container">
      {friendList &&
        friendList.map((friend) => (
          <div
            key={friend.id}
            className={`friend__container ${activeFriend === friend.id ? 'active' : ''}`}
            onClick={() => handleClick(friend.id)}
          >
            <img className="friend__image" src={`https://robohash.org/${friend.name}`}></img>
            <span className="friend__name">{friend.name}</span>
            <div className={`friend__status ${friend.status}`}></div>
          </div>
        ))}
    </div>
  );
};

export default FriendList;
