import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpForm from '../auth/SignUpForm';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;

  const props = {
    user: { email: 'art@your.com', password: 'password', username: 'username' },
    onSave: jest.fn(),
    onChange: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<SignUpForm {...props} />);
  });

  it('should render form', () => {
    expect(wrapper.find('#signUpForm')).toBeDefined();
    expect(wrapper.find('TextInput')).toBeDefined();
  });

});
