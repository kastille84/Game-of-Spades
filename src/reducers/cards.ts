import {Action} from '../actions';
import {shuffleCards} from '../utils/functions';

import {
  DISTRIBUTE_CARDS,
  SET_DEALER
} from '../constants'

import allCards from '../allCards';

export interface ICard {
  id: number,
  suit: string,
  type: string,
  value: number,
  img: string
}

export interface Cards {
  allCards: ICard[],
  dealer: number|null,
  cardsDistributed: boolean,
  biddingStarted: boolean,
  playingStarted: boolean,
  turn_info: {
    turn: number,
    playerId: number|null
  },
  cardsInPlay: ICard[],
  cutSpades: boolean,
  blindNil: boolean
}

export const initialState = {
  allCards: [...shuffleCards(allCards)],
  dealer: null,
  cardsDistributed: false,
  biddingStarted: false,
  playingStarted: false,
  turn_info: {
    turn: 0,
    playerId: null
  },
  cardsInPlay: [],
  cutSpades: false,
  blindNil: false
}

const cardsReducer = (state:Cards=initialState, action:Action):Cards => {
  switch(action.type) {
    case DISTRIBUTE_CARDS:
      return {...state,
        cardsDistributed:true
      }
    case SET_DEALER:
      return {...state,
        dealer: action.payload
      }
    default:
      return state;
  }
}

export default cardsReducer;

