import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer  from './authReducer'
import streamReducer  from './streamReducer'

export default combineReducers({
  // dummy: () => "replace Me"
  auth: authReducer,
  form : formReducer,
  streams: streamReducer  // mandatory key required to use redux form
})
