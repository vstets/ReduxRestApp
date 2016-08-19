import { combineReducers } from 'redux'
import items from './items'
import otherState from './otherState'
import onOff from './onOff'

export default combineReducers({
  items,
  otherState,
  onOff
})
