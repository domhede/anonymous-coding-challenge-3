import update from 'immutability-helper';

import {
  FETCH_PROPERTIES,
  FETCH_SAVED_PROPERTIES,
  SAVE_PROPERTY
} from 'constants/actionTypes'

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
    case FETCH_SAVED_PROPERTIES:
      return {
        ...state,
        saved: action.payload

      }
    case SAVE_PROPERTY:
      const propertyToSave = [action.payload];
      return {
        ...state,
        saved: update(state.saved, {$push: propertyToSave})
      }
    default:
      return state
  }
}