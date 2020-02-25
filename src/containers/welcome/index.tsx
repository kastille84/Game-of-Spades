import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers';
import {setGameStarted} from '../../actions';
import './index.scss';

interface WelcomeProps {
  gameStarted: boolean,
  setGameStarted: typeof setGameStarted
}

const mapStateToProps = (state:StoreState):{gameStarted:boolean} => ({
  gameStarted: state.game.gameStarted
})

const Welcome = (props:WelcomeProps) => {
  const {gameStarted, setGameStarted} = props;
  const onSetGameStarted = (val:boolean):void => {
    setGameStarted(val);
  }

  return (
    <main className="welcome" data-test="welcome">
      <button
        className="btn-start"
        data-test="btn-start"
        onClick={()=>onSetGameStarted(true)}
      >Start Game</button>
      {gameStarted?'true':'false'}
    </main>
  )
}

export default connect(mapStateToProps, {
  setGameStarted
})(Welcome);