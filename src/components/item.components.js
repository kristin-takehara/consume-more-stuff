import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';


const Item = ({ singleItem, singleView }) => {
  const url = /^http/;
  let imageUrl = singleItem.imageUrl;
   // if imageUrl is not an http link AND this is a request from the single item view
  if (!url.test(imageUrl) && singleView) {
    imageUrl = '/' + imageUrl;
  }
  return (
    <div className="single-item">
      <Link to={`/items/${singleItem.id}`}>
      { singleItem.name }
      </Link><br />
      <img className="uploaded-img" src={ imageUrl } alt="image not found" />
      <div className="card-details">
        <div className="card-manufacturer">{ singleItem.manufacturer }</div><br/>
        <div>{ singleItem.description }</div><br/>
        <div className="card-price">${ singleItem.price }</div><br/>
        <div>Model: { singleItem.model }</div><br/>
        <div>Condition: { singleItem.Condition.condition }</div><br/>
        <div>Category: { singleItem.Category.category }</div><br/>
        <div>Dimensions: { singleItem.dimensions }</div><br/>
        <div>Notes: { singleItem.notes }<br/>
          Updated: <FormattedRelative value={ singleItem.updatedAt } /><br/>

          Posted: <FormattedRelative value={ singleItem.createdAt } /><br/>
        </div>
      </div>

    </div>
  );
}

export default Item;