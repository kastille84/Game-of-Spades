import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from '../../utils/testUtils';
import Welcome from '.';
import {initialState} from '../../reducers/game';

const initState = {game: initialState};

const setup = (state=initState) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Welcome store={store}/>).dive().dive();
  //console.log(wrapper.debug())
  return wrapper;
}

describe("Welcome Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  })

  it('should render Welcome without crashing',()=> {
    expect(wrapper.length).toBe(1);
  })

  it('should display a button', () => {
    const button = findByTestAttr(wrapper,'btn-start');
    expect(button.length).toBe(1);
  })

  // it('should make "gameStarted" to true when clicking button', () => {
  //   const button = findByTestAttr(wrapper,'btn-start');
  //   button.simulate('click');
  //   const gameStartedProp = wrapper.instance().props.gameStarted;
  //   expect(gameStartedProp).toBeTruthy();

  // })

})
