import * as actions from '../actions/constants';
 
const initialState = {
  modalDisplay: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return { ...state, modalDisplay: true }
    case actions.HIDE_MODAL:
      return { ...state, modalDisplay: false }
    default:
      return state
  }
}

export default rootReducer;