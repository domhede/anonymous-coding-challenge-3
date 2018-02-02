import data from '../data.json';
import { FETCH_PROPERTIES } from '../../constants/actionTypes'

export const fetchProperties = () => ({
  type: FETCH_PROPERTIES,
  payload: data.results
});
