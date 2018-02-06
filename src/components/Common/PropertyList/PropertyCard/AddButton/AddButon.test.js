import React from 'react';
import { shallow, mount } from 'enzyme';

import AddButton from '../AddButton';

describe('AddButton component', () => {
  it('renders without crashing', () => {
    shallow(
      <AddButton className='addButton' />
    );
  });
});
