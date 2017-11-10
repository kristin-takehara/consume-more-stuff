import { LOAD_SINGLE_ITEM, EDITING, EDIT_ITEM } from '../actions/items.actions';

const initialState = {
  Category : '',
  Condition : '',
  Status : '',
  User : ''
};

const singleItem = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SINGLE_ITEM:
      return Object.assign({}, state, action.item);
    
    case EDITING:
      return Object.assign({}, state, {
        isEditing : !state.isEditing
      });

    case EDIT_ITEM:
    const updatedItem = action.updatedItem;

    return Object.assign({}, state, {
      name : updatedItem.name,
      price : updatedItem.price,
      description : updatedItem.description,
      manufacturer : updatedItem.manufacturer,
      modelname : updatedItem.modelname,
      category_id : updatedItem.category_id,
      condition_id : updatedItem.condition_id,
      is_sold : updatedItem.is_sold,
      created_by : updatedItem.created_by,
      updatedAt : updatedItem.updatedAt
    });

    default:
        return state;
  }
};

export default singleItem;