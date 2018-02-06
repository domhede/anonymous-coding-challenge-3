import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import PropertyButton from './component';


describe('PropertyButton component', () => {
  it('renders without crashing', () => {
    shallow(
      <PropertyButton className='propertyButton' />
    );
  });
  it('shows correct text with actionType prop: Add', () => {
    const rendered = renderer.create(
      <PropertyButton className='propertyButton' actionType='Add' />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('shows correct text with actionType prop: Remove', () => {
    const rendered = renderer.create(
      <PropertyButton className='propertyButton' actionType='Remove' />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })
});
