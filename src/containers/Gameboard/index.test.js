import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from '../../utils/testUtils';
import Gameboard from '.';
import {initialState} from '../../reducers/game';

const initState = {game: initialState};

const setup = (state=initState) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Gameboard store={store} />).dive().dive();
  return wrapper;
}

describe("Gameboard", () => {
  it('should render without crashing', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1);
  })
})