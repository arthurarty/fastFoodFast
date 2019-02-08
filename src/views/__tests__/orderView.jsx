import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OrderView } from '../orderView';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;

  const props = {
    getOrders: jest.fn(),
    state: {
    }
  };

  beforeEach(() => {
    wrapper = shallow(<OrderView {...props} />);
  });
  
  it('should render menu view', () => {
    expect(wrapper.find('OrderTable')).toBeDefined();
  });

});
