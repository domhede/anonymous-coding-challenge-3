import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './component';


describe('App component', () => {
  let mockFetchAll = jest.fn();
  let mockFetchSaved = jest.fn();

  it('renders without crashing', () => {
    shallow(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
  });

  it('should call fetchProperties when mounted', () => {
    const wrapper = mount(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
    expect(mockFetchAll).toHaveBeenCalled();
  })
  it('should call fetchSavedProperties when mounted', () => {
    const wrapper = mount(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
    expect(mockFetchSaved).toHaveBeenCalled();
  })
});
