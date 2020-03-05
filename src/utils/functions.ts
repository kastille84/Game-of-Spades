import {ICard} from '../reducers/cards';

export function shuffleCards(array:ICard[]):ICard[] {
  let copyArray = [...array];
  for(let i = copyArray.length -1; i >0; i--) {
    const j = Math.floor(Math.random()* (i+1));
    [copyArray[i],copyArray[j]]=[copyArray[j],copyArray[i]];
  }
  return copyArray;
}

export function distributeCards(allCards:ICard[]){
  let playerCards: {playerId:number, hand:ICard[]}[] = [
    {playerId: 1, hand:[]},
    {playerId: 2, hand:[]},
    {playerId: 3, hand:[]},
    {playerId: 4, hand:[]}
  ]
  let currentPlayer=1;
  allCards.forEach((card=> {
    playerCards[currentPlayer-1].hand.push(card);
    if(currentPlayer===4) {
      currentPlayer=1;
    }  else  {
      currentPlayer++;
    }
  }))
  return playerCards;
}

export const findTheDealer = (allCards: ICard[]) => {
  let dealerArr = [
    {
      player:1,
      value: allCards[0].value
    },
    {
      player:2,
      value: allCards[1].value
    },
    {
      player:3,
      value: allCards[2].value
    },
    {
      player:4,
      value: allCards[3].value
    },
  ]

  dealerArr.sort((a,b)=> {
    if (a.value < b.value) {
      return 1;
    } else if (b.value < a.value) {
      return -1;
    } else {
      return 0;
    }
  })
  return dealerArr[0].player;
}