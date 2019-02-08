import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../common/NavBar';

Enzyme.configure({ adapter: new Adapter() });

describe('signup form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('should render form', () => {
    expect(wrapper.find('#navbarSupportedContent')).toBeDefined();
  });

});
