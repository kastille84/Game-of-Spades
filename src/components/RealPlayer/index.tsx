import React from 'react';

import './index.scss'
interface PropsRealPlayer {
  playerId: number
}


const RealPlayer = ({playerId}: PropsRealPlayer):any => {

  return (
    <div className="real-player">
      RealPlayer {playerId}
    </div>
  )
}

export default RealPlayer;