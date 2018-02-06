import * as actions from 'data/actions/propertyActions'
import * as types from 'constants/actionTypes'
import data from '../data.json';

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
  })
})