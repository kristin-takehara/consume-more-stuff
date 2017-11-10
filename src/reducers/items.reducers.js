import { LOAD_ITEMS, ADD_ITEM, ADD_FILE } from '../actions/items.actions';
const initialState = [];

const itemList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ITEMS:
      return [ ...action.items ];

    case ADD_ITEM:
      return [ ...state, action.newItem ];

    case ADD_FILE:  // reducer for accepting the file load
      return [...state, action.newFile];
 
    default:
      return state;
  }
};

export default itemList;
