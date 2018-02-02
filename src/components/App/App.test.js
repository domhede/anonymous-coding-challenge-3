import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './component';
import PropertyList from 'components/Common/PropertyList/component';

const mockStore = configureStore();
const initialState = {
  properties: {
    all: [],
    saved: []
  }
}
const store = mockStore(initialState);

describe('App component', () => {
  let mockFetchAll = jest.fn();
  let mockFetchSaved = jest.fn();

  it('renders without crashing', () => {
    shallow(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
  });
  it('should call fetchProperties when mounted', () => {
    const wrapper = shallow(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
    expect(mockFetchAll).toHaveBeenCalled();
  });
  it('should call fetchSavedProperties when mounted', () => {
    const wrapper = shallow(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
    expect(mockFetchSaved).toHaveBeenCalled();
  });
  it('should render 2 PropertyList Components', () => {
    const componentsToFind = PropertyList;
    const wrapper = mount(
      <Provider store={store}>
        <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
      </Provider>
    );
    const actual = wrapper.find(componentsToFind).length;
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
