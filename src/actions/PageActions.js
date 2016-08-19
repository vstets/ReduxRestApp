import {
  ADD_ITEM,
  CHANGE_ITEM,
  DEL_ITEM,
  CHANGE_OTHER_STATE,
  ONOFF_TOGGLE
} from '../constants/App'


export function addItem() {
  return {
    type: ADD_ITEM
  };
}

export function changeItem(payload) {
  return {
    type: CHANGE_ITEM,
    id: payload.id
  };
}

export function delItem(payload) {
  return {
    type: DEL_ITEM,
    id: payload.id
  };
}

export function changeOtherState() {
  return {
    type: CHANGE_OTHER_STATE
  };
}

export function onOffToggle() {
  return {
    type: ONOFF_TOGGLE
  };
}
