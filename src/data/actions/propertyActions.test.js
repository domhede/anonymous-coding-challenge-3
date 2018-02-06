import * as actions from 'data/actions/propertyActions'
import * as types from 'constants/actionTypes'
import testInputs from '../testInputs.json';

describe('property actions', () => {
  it('should create an action to fetch all properties', () => {
    const properties = testInputs.all;
    const expectedAction = {
      type: types.FETCH_PROPERTIES,
      payload: properties
    }
    expect(actions.fetchProperties()).toEqual(expectedAction)
  }),
  it('should create an action to fetch saved properties', () => {
    const savedProperties = testInputs.saved;
    const expectedAction = {
      type: types.FETCH_SAVED_PROPERTIES,
      payload: savedProperties
    }
    expect(actions.fetchSavedProperties()).toEqual(expectedAction)
  }),
  it('should create an action to save a property', () => {
    const propertyToSave = testInputs.all[0].id;
    const expectedAction = {
      type: types.SAVE_PROPERTY,
      payload: testInputs.all[0].id
    }
    expect(actions.saveProperty(propertyToSave)).toEqual(expectedAction)
  }),
  it('should create an action to remove a property', () => {
    const propertyToRemove = testInputs.afterSave[1].id;
    const expectedAction = {
      type: types.REMOVE_PROPERTY,
      payload: testInputs.afterSave[1].id
    }
    expect(actions.removeProperty(propertyToRemove)).toEqual(expectedAction)
  })
})