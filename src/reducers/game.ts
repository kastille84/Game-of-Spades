import {
  Action
} from '../actions';

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
    default:
      return state;
  }
}

