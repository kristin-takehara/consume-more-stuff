import React from 'react';

// const Item = ({ id, name, description, manufacturer, modelname, price, category, condition, sold, owner }) => {

const Item = ({ singleItem }) => {
  return (
    <div className="Item">
      <div> Name: { singleItem.name } </div>
      <div> Description: { singleItem.description } </div>
      <div> Manufacturer: { singleItem.manufacturer } </div>
      <div> Model Name: { singleItem.modelname } </div>
      <div> Price: ${ singleItem.price } </div>
      <div> Category: { singleItem.Category.category } </div>
      <div> Condition: { singleItem.Condition.condition } </div>
      <div> Sold: { singleItem.Status.sold } </div>     
      <div> Owner: { singleItem.User.username } </div>
    </div>
  );
}

export default Item;