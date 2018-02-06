import update from 'immutability-helper';

import {
  FETCH_PROPERTIES,
  FETCH_SAVED_PROPERTIES,
  SAVE_PROPERTY,
  REMOVE_PROPERTY
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
      const propertyToSaveId = action.payload;
      const propertyToSave = state.all.find(property => property.id === propertyToSaveId);

      return {
        ...state,
        saved: update(state.saved, {$push: [propertyToSave]})
      }
    case REMOVE_PROPERTY:
      const propertyToRemoveId = action.payload;
      const indexOfPropertyToRemove = state.saved.findIndex(
        property => property.id === propertyToRemoveId
      );
      return {
        ...state,
        saved: update(state.saved, {$splice: [[indexOfPropertyToRemove, 1]]})
      }
    default:
      return state
  }
}