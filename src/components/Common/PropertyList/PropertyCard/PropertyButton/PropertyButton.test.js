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
  });
  it('Should call the removeProperty function when Button is clicked and actionType: Remove', () => {
    const saveProperty = jest.fn();
    const removeProperty = jest.fn();
    const wrapper = shallow(
      <PropertyButton
        className='propertyButton'
        removeProperty={removeProperty}
        saveProperty={saveProperty}
        actionType='Remove'
      />
    );
    expect(removeProperty.mock.calls.length).toEqual(0);
    wrapper.find('Button').simulate('click');
    expect(removeProperty.mock.calls.length).toEqual(1);
  });
  it('Should call the saveProperty function when Button is clicked and actionType: Add', () => {
    const saveProperty = jest.fn();
    const removeProperty = jest.fn();
    const wrapper = shallow(
      <PropertyButton
        className='propertyButton'
        removeProperty={removeProperty}
        saveProperty={saveProperty}
        actionType='Add'
      />
    );
    expect(saveProperty.mock.calls.length).toEqual(0);
    wrapper.find('Button').simulate('click');
    expect(saveProperty.mock.calls.length).toEqual(1);
  });
});
