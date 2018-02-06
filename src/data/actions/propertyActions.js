import data from '../data.json';
import {
  FETCH_PROPERTIES,
  FETCH_SAVED_PROPERTIES,
  SAVE_PROPERTY,
  REMOVE_PROPERTY
} from 'constants/actionTypes'

export const fetchProperties = () => ({
  type: FETCH_PROPERTIES,
  payload: data.results
});

export const fetchSavedProperties = () => ({
  type: FETCH_SAVED_PROPERTIES,
  payload: data.saved
});

export const saveProperty = propertyToSave => ({
  type: SAVE_PROPERTY,
  payload: propertyToSave
});

export const removeProperty = propertyToRemove => ({
  type: REMOVE_PROPERTY,
  payload: propertyToRemove
})