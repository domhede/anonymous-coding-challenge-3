import * as actions from 'data/actions/propertyActions'
import * as types from 'constants/actionTypes'
import data from '../data.json';
import testData from '../testData.json';

describe('property actions', () => {
  it('should create an action to fetch all properties', () => {
    const properties = data.results;
    const expectedAction = {
      type: types.FETCH_PROPERTIES,
      payload: properties
    }
    expect(actions.fetchProperties()).toEqual(expectedAction)
  }),
  it('should create an action to fetch saved properties', () => {
    const savedProperties = data.saved;
    const expectedAction = {
      type: types.FETCH_SAVED_PROPERTIES,
      payload: savedProperties
    }
    expect(actions.fetchSavedProperties()).toEqual(expectedAction)
  }),
  it('should create an action to save a property', () => {
    const propertyToSave = data.results[0];
    const expectedAction = {
      type: types.SAVE_PROPERTY,
      payload: data.results[0]
    }
    expect(actions.saveProperty(propertyToSave)).toEqual(expectedAction)
  }),
  it('should create an action to remove a property', () => {
    const propertyToRemove = testData.afterSave[1];
    const expectedAction = {
      type: types.REMOVE_PROPERTY,
      payload: testData.afterSave[1]
    }
    expect(actions.removeProperty(propertyToRemove)).toEqual(expectedAction)
  })
})