import { LOAD_SINGLE_ITEM, EDITING } from '../actions/items.actions';

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

  default:
      return state;
  }
};

export default singleItem;