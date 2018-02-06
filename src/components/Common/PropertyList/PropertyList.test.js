import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import PropertyList from './component';


describe('PropertyList component', () => {
  it('renders without crashing', () => {
    shallow(
      <PropertyList properties={[]} />
    );
  });
  it('renders correctly when prop: listType=all', () => {
    const rendered = renderer.create(
      <PropertyList properties={[]} listType='all' />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('renders correctly when prop: listType=saved', () => {
    const rendered = renderer.create(
      <PropertyList properties={[]} listType='saved' />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('shows empty state when no properties', () => {
    const wrapper = shallow(
      <PropertyList
        properties={[]} listType='saved'
      />
    );
    expect(wrapper.find('Empty').length).toEqual(1);
  })
});

