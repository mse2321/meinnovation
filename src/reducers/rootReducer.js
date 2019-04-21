import * as actions from '../actions/constants';
 
const initialState = {
  display : "displayNone"
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return { ...state, display: "displayBlock" }
    case actions.HIDE_MODAL:
      return { ...state, display: "displayNone" }
    default:
      return state
  }
}

export default rootReducer;