import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ singleUser }) => {
  return (
    <div>
      <div className="single-user">
        <div>
        Welcome, { singleUser.username }
        </div>
      </div>
      <div className="single-user-items">
        {
         singleUser.Items
         .map((itemDetails) => {
          console.log(itemDetails)
           return(
            <div>
            <div>
              {itemDetails.name}
             </div>

            <div>
               {itemDetails.price}
             </div>
             </div>
           );
         })
        }
      </div>
    </div>
  );
}

export default UserItem;