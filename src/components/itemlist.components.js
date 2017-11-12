// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';

const ItemList = ({ items }) => {
  return (
    <div id="item-list"> {
      items
      .filter(item => {
        return !item.deletedAt;
      })
      .filter(item => {
        return item.is_sold === 1;
      })
      .map((item, idx) => {
        //renders X amount of items
        return (
          <Item
          singleItem={ item }
          key={ idx } />
        );
      })
    }
    </div>
  );
}

export default ItemList;