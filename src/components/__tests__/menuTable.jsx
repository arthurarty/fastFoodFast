import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuTable from '../menu/menuTable';

Enzyme.configure({ adapter: new Adapter() });

describe('menu table', () => {
  let wrapper;

  const props = {
    menuItems: [[
      [
        {
          description: 'pilao rice with gravy',
          menu_id: 1,
          name: 'rice',
          price: 11000,
        },
      ],
      [
        {
          description: 'fried chicken',
          menu_id: 2,
          name: 'chicken',
          price: 11000,
        },
      ],
    ]],
  };

  beforeEach(() => {
    wrapper = shallow(<MenuTable {...props} />);
  });

  it('should render table', () => {
    expect(wrapper.find('#table')).toBeDefined();
  });

});
