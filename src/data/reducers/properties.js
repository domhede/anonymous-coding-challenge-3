import { FETCH_PROPERTIES } from 'constants/actionTypes'

const INITIAL_STATE = {
  all: [],
  saved: []
};

export default function properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return {
        ...state,
        all: action.payload

      }

    default:
      return state
  }
}