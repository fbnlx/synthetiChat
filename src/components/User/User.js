import React from 'react';
import { useSelector } from 'react-redux';

import './User.scss';

const User = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div className="user__container">
      {user && (
        <>
          <img className="user__image" src={`https://robohash.org/${user.name}`}></img>
          <span className="user__name">{user.name}</span>
          <div className="user__status-container">
            <div className={`user__status-image ${user.status}`}></div>
            <span className="user__status-text">{user.status}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
