import { combineReducers } from 'redux'
import auth from './auth'
import project from './project'

const appReducer = combineReducers({ auth, project })

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
