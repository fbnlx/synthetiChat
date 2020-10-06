import React, { useEffect, useState } from 'react';
import { users } from '../../../data';

import './FriendList.scss';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(users);
  }, []);

  return (
    <div className="friend-list__container">
      {friends &&
        friends.map((friend) => (
          <div className="friend__container">
            <span className="friend__name">{friend.name}</span>
          </div>
        ))}
    </div>
  );
};

export default FriendList;
