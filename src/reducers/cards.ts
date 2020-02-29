import {Action} from '../actions';



export interface ICard {
  id: number,
  suit: string,
  type: string,
  value: number,
  img: string
}

export interface Cards {
 allCards: ICard[],
 currentDealer: number|null,
 currentHand: {
   currentTurn: number|null,
   cardsInPlay: ICard[],
   cutSpades: boolean,
   blindNil: boolean
 }
}

export const initialState = {

}

const cardsReducer = (state:Cards, action:Action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default cardsReducer;

