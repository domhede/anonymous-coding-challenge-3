import React from 'react';
import { shallow, mount } from 'enzyme';
import PropertyList from 'components/Common/PropertyList';


describe('App component', () => {
  it('renders without crashing', () => {
    shallow(
      <PropertyList />
    );
  });
});

