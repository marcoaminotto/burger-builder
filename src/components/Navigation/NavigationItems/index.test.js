import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './index';
import NavigationItem from './NavigationItem';

configure({
  adapter: new Adapter(),
});

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two <NavigationItems /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NavigationItems /> elements if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render <NavigationItem /> element of Logout if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  }); 

  it('should render <NavigationItem /> element of Authenticated if not authenticated', () => {
    expect(wrapper.contains(<NavigationItem link="/auth">Authentication</NavigationItem>)).toEqual(true);
  }); 
});
