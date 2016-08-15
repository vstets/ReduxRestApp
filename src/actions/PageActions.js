import {
  ADD_ITEM,
  DEL_ITEM
} from '../constants/App'


export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function delItem(payload) {
  return {
    type: DEL_ITEM,
    id: payload.id
  };
}
