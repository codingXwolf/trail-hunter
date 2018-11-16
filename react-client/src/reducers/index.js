import { combineReducers } from 'redux';
import userInfo from './userInfo';

//userlist instead of userinfo
const appReducer = combineReducers({
    userInfo
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT'){
    state = undefined
  } 
  return appReducer(state, action)
}

export default rootReducer