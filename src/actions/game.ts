import {Dispatch} from 'redux';
import {
  SET_GAME_STARTED
} from '../constants';

export interface SetGameStartedAction {
  type: typeof SET_GAME_STARTED,
  payload: boolean
}