import React from 'react';
import { shallow, mount } from 'enzyme';
import data from 'data/data.json';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import PropertyCard from '../PropertyCard';

const property = data.results[0];
const mockStore = configureStore();
const initialState = {
  properties: {
    all: [],
    saved: []
  }
}
const store = mockStore(initialState);

describe('Property Card component', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <PropertyCard {...property} listType='all' />
      </Provider>
    );
  });
  it('renders correctly when prop: property', () => {
    const rendered = renderer.create(
      <Provider store={store}>
        <PropertyCard {...property} listType='all' />
      </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});