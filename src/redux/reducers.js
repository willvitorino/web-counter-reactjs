import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  counter: 0
}

export function reducer( state=initialState, action ) {
  switch(action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}