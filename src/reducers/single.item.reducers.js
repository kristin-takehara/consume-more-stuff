import { LOAD_SINGLE_ITEM } from '../actions/items.actions';

const initialState = [];

const singleItem = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SINGLE_ITEM:
      return [ action.item ]
  default:
      return state;
  }
}

export default singleItem;