import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';

import {StoreState} from '../../reducers';
import {Game} from '../../reducers/game';

import ComPlayer from '../../components/ComPlayer';
import RealPlayer from '../../components/RealPlayer';
import Hand from '../../components/Hand';

import './index.scss'
interface GameboardProps extends RouteComponentProps  {
  game:Game
}
const mapStateToProps = (state:StoreState) => ({
  game: state.game
})

class Gameboard extends Component<GameboardProps> {
  
  // determineIfHandStarted = ():JSX.Element => {
  //   const {handStarted} = this.props.game;
  //   // if(!handStarted) {
      
  //   // } else {

  //   // }
  //   return <div>hey</div>
  // }

  render() {
    return (
      <div className="gameboard">
        {/* Player 3 - Team mate */}
        <div className="gameboard-top">
          <ComPlayer 
            orientation="upright"
            playerId={3}
          />
        </div>

        {/* Players 2 & 4 - Opposing Teammates */}
        <div className="gameboard-middle">
          <ComPlayer 
            orientation="straight"
            playerId={2} 
          />

          <Hand 
          
          />

          <ComPlayer 
            orientation="straight"
            playerId={4} 
          />
        </div>

        {/* Player 1 - YOU */}
        <div className="gameboard-bottom">
          <RealPlayer 
            playerId={1}
          />
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Gameboard);