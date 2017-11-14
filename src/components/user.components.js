import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ singleUser }) => {
  console.log(singleUser);
  return (
    <div className="single-user">
Welcome, { singleUser.username }!
    </div>
  );
}

export default UserItem;