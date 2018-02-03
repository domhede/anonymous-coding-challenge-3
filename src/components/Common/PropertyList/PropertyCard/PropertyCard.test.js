import React from 'react';
import { shallow, mount } from 'enzyme';

import PropertyCard from '../PropertyCard';


describe('Property Card component', () => {
  it('renders without crashing', () => {
    shallow(
      <PropertyCard />
    );
  });
});