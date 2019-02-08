import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuForm from '../menu/menuForm';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;

  const props = {
    menuItem: { description: 'let me', name: 'food', price: '5000' },
    onSave: jest.fn(),
    updateMenuState: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<MenuForm {...props} />);
  });

  it('should render form', () => {
    expect(wrapper.find('#menuFrom')).toBeDefined();
    expect(wrapper.find('TextInput')).toBeDefined();
  });

});
