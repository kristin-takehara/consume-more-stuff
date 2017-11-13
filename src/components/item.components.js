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

      <div>
        { singleItem.name }
      </div>
  
      <Link to={`/items/${singleItem.id}`}>
        <img className="uploaded-img" src={ imageUrl } alt="image not found" />
      </Link>

      <div className="card-price">
        ${ singleItem.price }
      </div>

      <div>
        { singleItem.description }
      </div>

      { singleView 
        // if singleView is true render these
        ? <div className="card-details">
          <div className="card-manufacturer">{ singleItem.manufacturer }
          </div>
          <div>
            Model: { singleItem.model }
          </div>
          <div>
            Condition: { singleItem.Condition.condition }
          </div>
          <div>
            Category: { singleItem.Category.category }
          </div>
          <div>
            Dimensions: { singleItem.dimensions }
          </div>
          <div>
            Notes: { singleItem.notes }
          </div>
          <div>
            Updated: <FormattedRelative value={ singleItem.updatedAt } />
          </div>
          <div>
            Posted: <FormattedRelative value={ singleItem.createdAt } />
          </div>
        </div>
        // else render nothing
        : null
      }
  
    </div>
  );
}

export default Item;