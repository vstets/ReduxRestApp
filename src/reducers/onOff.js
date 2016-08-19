import {
  ONOFF_TOGGLE
} from '../constants/App'


const onOff = (state = {item: false}, action) => {
  switch (action.type) {

    case ONOFF_TOGGLE:
      return Object.assign({}, state, { item: !state.item })

    default:
      return state
  }
}

export default onOff
