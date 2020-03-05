import {combineReducers} from 'redux';
import gameReducer,{Game} from './game';
import cardsReducer, {Cards} from './cards';
import playersReducer, {Players} from './players';

export interface StoreState {
  game: Game,
  cards: Cards,
  players: Players
}

export default combineReducers<StoreState>({
  game: gameReducer,
  cards: cardsReducer,
  players: playersReducer
});
