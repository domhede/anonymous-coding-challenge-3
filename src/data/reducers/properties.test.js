import reducer from './properties';
import * as types from '../../constants/ActionTypes';
import data from '../data.json';

describe('properties reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        all: [],
        saved: []
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
        all: data.results
      }
    )
  });
  it('should handle FETCH_SAVED_PROPERTIES', () => {
    expect(
      reducer([], {
        type: types.FETCH_SAVED_PROPERTIES,
        payload: data.saved
      })
    ).toEqual(
      {
        saved: data.saved
      }
    )
  });
});