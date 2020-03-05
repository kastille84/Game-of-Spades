import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';

import {StoreState} from '../../reducers';
import {Game} from '../../reducers/game';
import {Cards} from '../../reducers/cards';

import ComPlayer from '../../components/ComPlayer';
import RealPlayer from '../../components/RealPlayer';
import Hand from '../../components/Hand';
import {
  setDistributeCards,
  setDealer
} from '../../actions/index'

import {
  distributeCards,
  findTheDealer
} from '../../utils/functions';

import './index.scss'

interface GameboardProps extends RouteComponentProps  {
  game:Game,
  cards: Cards,
  setDistributeCards: typeof setDistributeCards,
  setDealer: typeof setDealer
}
const mapStateToProps = (state:StoreState) => ({
  game: state.game,
  cards: state.cards
})

class Gameboard extends Component<GameboardProps> {
  
  componentDidMount() {
    //1. if dealer is null, then find the dealer
    const dealer = findTheDealer(this.props.cards.allCards);
    this.props.setDealer(dealer);

    //2. distrubute the cards to each player
    this.props.setDistributeCards(distributeCards(this.props.cards.allCards));
  }

  componentDidUpdate() {
   
   

  }

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
            orientation="upright"
          />
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, {
  setDistributeCards,
  setDealer
})(Gameboard);