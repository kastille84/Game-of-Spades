import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers';
import {setGameStarted} from '../../actions';
import './index.scss';
import {RouteComponentProps} from 'react-router-dom';

interface WelcomeProps extends RouteComponentProps{
  gameStarted: boolean,
  setGameStarted: typeof setGameStarted
}

const mapStateToProps = (state:StoreState):{gameStarted:boolean} => ({
  gameStarted: state.game.gameStarted
})


const Welcome = (props:WelcomeProps) => {
  const {setGameStarted} = props;
  const onSetGameStarted = (val:boolean):void => {
    setGameStarted(val);
    props.history.push('/gameboard')
  }

  return (
    <main className="welcome" data-test="welcome">
      <h2>Game of Spades</h2>
      <button
        className="btn-start"
        data-test="btn-start"
        onClick={()=>onSetGameStarted(true)}
      >Start Game</button>
    </main>
  )
}

export default connect(mapStateToProps, {
  setGameStarted
})(Welcome);