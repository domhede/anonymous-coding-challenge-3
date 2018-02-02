import data from '../data.json';
import { FETCH_PROPERTIES, FETCH_SAVED_PROPERTIES } from '../../constants/actionTypes'

export const fetchProperties = () => ({
  type: FETCH_PROPERTIES,
  payload: data.results
});

export const fetchSavedProperties = () => ({
  type: FETCH_SAVED_PROPERTIES,
  payload: data.saved
});