import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MenuView } from '../menuView';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;
  let instance;

  const props = {
    getMenu: jest.fn(),
    postMenu: jest.fn(),
    state: {
    }
  };

  beforeEach(() => {
    wrapper = shallow(<MenuView{...props} />);
    instance = wrapper.instance();
    jest.spyOn(instance, 'saveMenuItem');
  });
  
  it('should render menu view', () => {
    expect(wrapper.find('MenuTable')).toBeDefined();
  });

  it('should call saveMenuItem', () => {
    instance.saveMenuItem({
      preventDefault: () => {},
    });
    expect(instance.saveMenuItem).toBeCalled();
  });

});
