import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer  from './authReducer'

export default combineReducers({
  // dummy: () => "replace Me"
  auth: authReducer,
  form : formReducer // mandatory key required to use redux form
})
