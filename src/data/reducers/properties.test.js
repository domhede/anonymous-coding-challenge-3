import reducer from './properties';
import * as types from '../../constants/ActionTypes';
import testInputs from '../testInputs.json';

const beforeSaveState = {
  all: testInputs.all,
  saved: testInputs.saved
};

const afterSaveState = {
  all: testInputs.all,
  saved: testInputs.afterSave
};

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
        payload: testInputs.all
      })
    ).toEqual(
      {
        all: testInputs.all
      }
    )
  });
  it('should handle FETCH_SAVED_PROPERTIES', () => {
    expect(
      reducer([], {
        type: types.FETCH_SAVED_PROPERTIES,
        payload: testInputs.saved
      })
    ).toEqual(
      {
        saved: testInputs.saved
      }
    )
  });
  it('should handle SAVE_PROPERTY', () => {
    expect(
      reducer(beforeSaveState, {
        type: types.SAVE_PROPERTY,
        payload: testInputs.all[0].id
      })
    ).toEqual(
      {
        all: testInputs.all,
        saved: testInputs.afterSave
      }
    )
  });
  it('should handle REMOVE_PROPERTY', () => {
    expect(
      reducer(afterSaveState, {
        type: types.REMOVE_PROPERTY,
        payload: testInputs.all[1].id
      })
    ).toEqual(
      beforeSaveState
    )
  });
  it('should create block the action to save a property if the property is already saved', () => {
    expect(
      reducer(afterSaveState, {
        type: types.SAVE_PROPERTY,
        payload: testInputs.all[0].id
      })
    ).toEqual(
      afterSaveState
    )
  });
});