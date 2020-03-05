import React from 'react';
import Card from '../Card';

import './index.scss';

interface PropsRealPlayer {
  playerId: number,
  orientation: string
}


const RealPlayer = ({playerId, orientation}: PropsRealPlayer):JSX.Element => {

  return (
    <div className={`real-player real-player-${orientation}`}>
      RealPlayer {playerId}
      <div className="cards-container">
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"clubs-2.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"clubs-2.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"clubs-2.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"clubs-2.png"
          }}
          orientation={orientation}
        />
        <Card 
          card={{
            id:2,
            suit:"clubs",
            type:"2",
            value:2,
            img:"clubs-2.png"
          }}
          orientation={orientation}
        />
      </div>
    </div>
  )
}

export default RealPlayer;