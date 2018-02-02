import reducer from './properties';

describe('properties reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        properties: {},
        savedProperties: {}
      }
    )
  })
});