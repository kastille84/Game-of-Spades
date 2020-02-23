import {Dispatch} from 'redux';
import {
  SET_GAME_STARTED
} from '../constants';

export interface SetGameStartedAction {
  type: typeof SET_GAME_STARTED,
  payload: boolean
}

export const setGameStarted = (value:boolean): SetGameStartedAction => {
  return {
    type: SET_GAME_STARTED,
    payload: value
  }
}