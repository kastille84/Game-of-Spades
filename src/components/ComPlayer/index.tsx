import React from 'react';

import Card from '../Card';

import './index.scss';

interface PropsComPlayer {
  orientation: string,
  playerId: number
}

const ComPlayer = ({orientation, playerId}: PropsComPlayer):any => {

  return (
    <div className={`com-player com-player-${orientation}`}>
      player {playerId}
      <div className="cards-container">
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"back.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"back.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"back.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"back.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"back.png"
          }}
          orientation={orientation}
        />
      </div>
    </div>
  )
}

export default ComPlayer;