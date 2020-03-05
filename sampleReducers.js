

//Game
{
  gameStarted: false,
  handStarted: false,
  gamePaused: false 
}

//player
{
  players: [
    {
      playerId: 1,
      cpu: false,
      teamId: 'A',
      bid: 4,
      actual: 5,
      hand: [
        {
          suit: 'clubs',
          type: 'Q',
          value: 12
        }
      ]
    }
  ]
}
//Cards
{
  allCards: [
    {
      id: 23,
      suit: 'diamonds',
      type: '7',
      value: 7,
      img: "spades-7"
    }
  ],
  currentHand: {
    dealer: 3 //or null if we are seeing who deals first to start the game
    cardsDistrubuted: false
    biddingStarted: false,
    playingStarted: false,
    turn_info: {
      turn: 2, //default is 1
      playerId: 2 //default set to current d ealer
    },
    cardsInPlay:[
      {
        suit: 'diamonds',
        type: '7',
        value: 7,
        img: "diamond-7"
      }
    ],
    cutSpades: false,
    blindNil: false
  }
}

//Score
{
  maxPoints:500,
  scores: [
    //All of Team A stats
    {
      teamId: "A",
      rounds: [
        {
          round: 1,
          players: [
            {
              playerId: 1,
              bid: 4,
              actual: 5
            },
            {
              playerId: 3,
              bid: 3,
              actual: 3
            }
          ],
          score:80,
          bags: 1,
          tricks: 8
        }
      ],
      totalScore: 0,
      totalBags: 0
    }
  ]
}