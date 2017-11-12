import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ singleUser }) => {
  console.log(singleUser);
  return (
    <div className="single-user">
      <div> Welcome, { singleUser.username }! </div><br/>
    </div>
  );
}

export default UserItem;