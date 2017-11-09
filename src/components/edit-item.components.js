import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';
import Select from './select.components.js';

const EditItem = ({ singleItem, categories, conditions, statuses, handleSubmit, handleChange }) => {
  return (
    <div className="single-item" id="edit-single-item">

      <form onSubmit={ (e) => handleSubmit(card.id, e) }>
        
        <div>
          <input
            name="name"
            onChange={handleChange}
            defaultValue={singleItem.name} />
        </div>
        <div>
        <div>
          <Select
            list={categories}
            name="category_id"
            label="Category: "
            type="category"
            handler={this.handleChange}
            defaultValue={singleItem.Category.category} />
        </div>
        <div>
          <Select
            list={conditions}
            name="condition_id"
            label="Conditon: "
            type="condition"
            handler={this.handleChange}
            defaultValue={singleItem.Conditon.condition} />
        </div>
        <div>
          <Select
            list={statuses}
            name="is_sold"
            label="Sold: "
            type="sold"
            handler={this.handleChange}
            defaultValue={singleItem.Status.sold} />
        </div>
      </form>

    </div>
  );
}

export default EditItem;