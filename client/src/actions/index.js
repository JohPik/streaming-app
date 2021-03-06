import streams from '../apis/streams'
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM } from './types'


export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}


export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}


export const createStream = (formValues) => {
  return async (dispatch, getState) => { //getState is a helper function that pull out information about the state
  const { userId } = getState().auth //react-redux retrieves userID from GoogleAuth
  const response = await streams.post('/streams', { ...formValues, userId }) // combine Form Value with userId

  dispatch( {type: CREATE_STREAM, payload: response.data } )
  history.push('/')
  }
}

export const fetchStreams = () => {
  return async dispatch => {
    const response = await streams.get('/streams')

    dispatch( {type: FETCH_STREAMS, payload: response.data })
  }
}

export const fetchStream = (id) => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch( {type: FETCH_STREAM, payload: response.data })
  }
}

export const editStream = (id, formValues ) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch( {type: EDIT_STREAM, payload: response.data })
    history.push('/')
  }
}

export const deleteStream = (id) => {
  return async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch( {type: DELETE_STREAM, payload: id })
    history.push('/')
  }
}


// export const createStream = formValues => async dispatch => {
//   const response = await streams.post('/streams', formValues)
// }
