import reducer from './properties';
import * as types from '../../constants/ActionTypes';
import data from '../data.json';

describe('properties reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        properties: [],
        savedProperties: []
      }
    )
  })
  it('should handle FETCH_PROPERTIES', () => {
    expect(
      reducer([], {
        type: types.FETCH_PROPERTIES,
        payload: data.results
      })
    ).toEqual(
      {
        properties: data.results
      }
    )
  });
});