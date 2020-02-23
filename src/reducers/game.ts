import {
  Action
} from '../actions';
import {
  SET_GAME_STARTED
} from '../constants';

export interface Game {
  gameStarted: boolean,
  handStarted: boolean,
  gamePaused: boolean
}

const initialState = {
  gameStarted: false,
  handStarted: false,
  gamePaused: false
}

export const gameReducer = (state: Game = initialState, action:Action) => {
  switch(action.type) {
    case SET_GAME_STARTED:
      return {...state, 
        gameStarted:action.payload}
    default:
      return state;
  }
}

