import {
  ADD_ITEM,
  CHANGE_ITEM,
  DEL_ITEM
} from '../constants/App'

let nextItemId = 0;

const getNextItemId = () => {
  return nextItemId += 1;
}

const getItemId = () => {
  return nextItemId;
}

const item = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        id: getNextItemId(),
        text: 'item_' + getItemId()
      }
    default:
      return state
  }
}

const items = (state = [{id: 0, text: 'item_0'}], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        item(undefined, action)
      ]
    case CHANGE_ITEM:
      return state.map(item =>
        item.id === action.id ?
          Object.assign({}, item, { id: getNextItemId(), text: 'item_' + getItemId() }) :
          item
      )
    case DEL_ITEM:
      return state.filter(item =>
        item.id !== action.id
      )
    default:
      return state
  }
}

export default items
