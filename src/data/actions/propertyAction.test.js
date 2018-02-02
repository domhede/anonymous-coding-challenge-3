import * as actions from '../actions/propertyActions'
import * as types from '../../constants/actionTypes'
import data from '../data.json';

describe('actions', () => {
  it('should create an action to fetch properties', () => {
    const properties = data.results;
    const expectedAction = {
      type: types.FETCH_PROPERTIES,
      payload: properties
    }
    expect(actions.fetchProperties()).toEqual(expectedAction)
  })
})