import { FETCH_PROPERTIES } from '../../constants/actionTypes'

const INITIAL_STATE = {
  properties: [],
  savedProperties: []
};

export default function properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return {
        properties: action.payload,
        ...state
      }

    default:
      return state
  }
}