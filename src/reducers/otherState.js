import {
  CHANGE_OTHER_STATE
} from '../constants/App'


const otherState = (state = false, action) => {
  switch (action.type) {
    case CHANGE_OTHER_STATE:
      return !state

    default:
      return state
  }
}

export default otherState
