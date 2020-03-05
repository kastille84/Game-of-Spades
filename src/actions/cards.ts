import {
  DISTRIBUTE_CARDS,
  SET_DEALER
} from '../constants';
import {ICard} from '../reducers/cards';

export interface DistributeCardsAction {
  type: typeof DISTRIBUTE_CARDS,
  payload: {playerId:number, hand:ICard[]}[]
}
export interface SetDealerAction {
  type: typeof SET_DEALER,
  payload: number
}

export const setDistributeCards = (playerCards:{playerId:number, hand:ICard[]}[]):DistributeCardsAction  => {
  return {
    type: DISTRIBUTE_CARDS,
    payload: playerCards
  }
}

export const setDealer = (playerId:number):SetDealerAction => {
  return {
    type: SET_DEALER,
    payload: playerId
  }
}