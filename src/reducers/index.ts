import {combineReducers} from 'redux';
import gameReducer,{Game} from './game';

export interface StoreState {
  game: Game
}

export default combineReducers<StoreState>({
  game: gameReducer
});
