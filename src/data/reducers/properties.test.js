import reducer from './properties';
import * as types from '../../constants/ActionTypes';
import data from '../data.json';
import testData from '../testData.json';

const beforeSaveState = {
  all: data.results,
  saved: data.saved
}
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
  it('should handle SAVE_PROPERTY', () => {
    expect(
      reducer(beforeSaveState, {
        type: types.SAVE_PROPERTY,
        payload: data.results[0]
      })
    ).toEqual(
      {
        all: beforeSaveState.all,
        saved: testData.afterSave
      }
    )
  });
  it('should handle REMOVE_PROPERTY', () => {
    expect(
      reducer({
        all: beforeSaveState.all,
        saved: testData.afterSave
      }, {
        type: types.REMOVE_PROPERTY,
        payload: data.results[1]
      })
    ).toEqual(
      beforeSaveState
    )
  });
});