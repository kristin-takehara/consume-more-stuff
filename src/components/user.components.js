import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';

const UserItem = ({ singleUser }) => {
  return (
    <div className="single-user">
      <h1>Welcome, { singleUser.username }</h1>
      { singleUser.Items.map((itemDetails) => {
        const url = /^http/;
        let imageUrl = itemDetails.imageUrl;
         // if imageUrl is not an http link AND this is a request from the single item view
        if (!url.test(imageUrl)) { imageUrl = '/' + imageUrl; }
        if ( itemDetails.is_sold === 1 ){
          return(
          <div className="unsold">
          <h2> ITEMS FOR SALE </h2>
            <Link to={`/items/${itemDetails.id}`}>
              <h3>{ itemDetails.name }</h3>
              <img className="uploaded-img" src={ imageUrl } alt="image not found" />
            </Link>
            <div>Price: ${ itemDetails.price } </div>
            <div>Description: { itemDetails.description } </div>
            <div>
              <h3>Posted:</h3> <FormattedRelative value={ itemDetails.createdAt } />
            </div>
          </div>
          );
          } else {
            return(
            <div className="sold">
            <h2> SOLD ITEMS </h2>
              <Link to={`/items/${itemDetails.id}`}>
                <h3>{ itemDetails.name }</h3>
                <img className="uploaded-img" src={ imageUrl } alt="image not found" />
              </Link>
              <div>Price: ${ itemDetails.price } </div>
              <div>Description: { itemDetails.description } </div>
              <div>
                <h3>Posted:</h3> <FormattedRelative value={ itemDetails.createdAt } />
              </div>
            </div>
            );
          }
        })
      }
      </div>
  );
}

export default UserItem;