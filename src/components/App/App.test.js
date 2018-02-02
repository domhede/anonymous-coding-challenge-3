import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './component';
import PropertyList from 'components/Common/PropertyList';


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
  it('should render a ::PropertyList Component', () => {
    const componentsToFind = PropertyList;
    const wrapper = shallow(
      <App fetchProperties={mockFetchAll} fetchSavedProperties={mockFetchSaved} />
    );
    const actual = wrapper.find(componentsToFind).length;
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
