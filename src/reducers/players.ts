import {Action} from '../actions';
import {
  DISTRIBUTE_CARDS
} from '../constants'
import {ICard} from './cards';

export interface IPlayer {
  playerId: number,
  cpu: boolean,
  teamId: string,
  bid: number |null,
  actual: number |null,
  hand: ICard[] | []
}

export type Players = IPlayer[];

export const initialState = [
    {
      playerId: 1,
      cpu: false,
      teamId: 'A',
      bid: null,
      actual: null,
      hand: []
    },
    {
      playerId: 2,
      cpu: true,
      teamId: 'B',
      bid: null,
      actual: null,
      hand: []
    },
    {
      playerId: 3,
      cpu: true,
      teamId: 'A',
      bid: null,
      actual: null,
      hand: []
    },
    {
      playerId: 4,
      cpu: true,
      teamId: 'B',
      bid: null,
      actual: null,
      hand: []
    }
  ]


const playersReducer = (state:Players=initialState, action:Action): Players => {
  let copyState = [...state];
  switch(action.type) {
    case DISTRIBUTE_CARDS:
      copyState[0].hand = action.payload[0].hand;
      copyState[1].hand = action.payload[1].hand;
      copyState[2].hand = action.payload[2].hand;
      copyState[3].hand = action.payload[3].hand;
      console.log("copyState", copyState)
      return copyState;
    default:
      return state;
  }
}



export default playersReducer