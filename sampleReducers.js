

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
      value: 7
    }
  ],
  currentHand: {
    currentTurn: 2,
    cardsInPlay:[
      {
        suit: 'diamonds',
        type: '7',
        value: 7
      }
    ],
    cutSpades: false,
    blindNil: false
  },
  currentDealer: 3
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