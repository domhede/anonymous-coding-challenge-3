import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './component';


describe('App component', () => {
  let mockFetch = jest.fn();

  it('renders without crashing', () => {
    shallow(<App fetchProperties={mockFetch} />);
  });

  it('should call fetchProperties when mounted', () => {
    const wrapper = mount(<App fetchProperties={mockFetch}/>);
    expect(mockFetch).toHaveBeenCalled();
  })

});
