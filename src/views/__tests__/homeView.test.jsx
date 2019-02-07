import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HomeView } from '../homeView';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;
  let instance;

  const state = {
    user: { email: 'art@your.com', password: 'password', username: 'username' },
  };

  const props = {
    createUser: jest.fn(),
    state: {
      message: '',
    }
  };

  beforeEach(() => {
    wrapper = shallow(<HomeView {...state} {...props} />);
    instance = wrapper.instance();
    jest.spyOn(instance, 'saveUser');
    jest.spyOn(instance, 'login');
    jest.spyOn(instance, 'updateUserState');
  });

  it('should call saveUser', () => {
    instance.saveUser({
      preventDefault: () => {},
    });
    expect(instance.saveUser).toBeCalled();
  });

  it('should call login', () => {
    instance.login({
      preventDefault: () => {},
    });
    expect(instance.login).toBeCalled();
  });

  it('should call onchange', () => {
    const data = wrapper.state();
    wrapper.find('SignUpForm').simulate('change', { target: { name: 'name', value: 'arthur' } });
    expect(data.user.name).toEqual('arthur');
  });
});
