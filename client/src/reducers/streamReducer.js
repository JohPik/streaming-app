import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'

export default (state ={}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
    const mapMyArray = (array, param) =>
    Object.assign({}, ...array.map( index => ( {[index[param]]: index} )))
    return { ...state, ...mapMyArray(action.payload, "id")}

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }

    case CREATE_STREAM:

        return { ...state, [action.payload.id]: action.payload }

    case EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload }

    case DELETE_STREAM:
        const newState = { ...state };
        delete newState[action.payload];
        return newState;

    default:
      return state
  }
}
