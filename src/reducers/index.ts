import {combineReducers} from 'redux';
import {gameReducer, Game} from './game';

export interface StoreState {
  game: Game
}

export const reducers = combineReducers<StoreState>({
  game: gameReducer
});
