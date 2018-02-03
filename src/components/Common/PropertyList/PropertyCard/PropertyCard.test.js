import React from 'react';
import { shallow, mount } from 'enzyme';
import data from 'data/data.json';
import renderer from 'react-test-renderer';

import PropertyCard from '../PropertyCard';

const property = data.results[0];

describe('Property Card component', () => {
  it('renders without crashing', () => {
    shallow(
      <PropertyCard {...property} />
    );
  });
  it('renders correctly when prop: property', () => {
    const rendered = renderer.create(
      <PropertyCard {...property} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});