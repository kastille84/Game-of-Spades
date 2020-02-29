import React from 'react';

import {ICard} from '../../reducers/cards';

import './index.scss';
interface PropsCard {
  card: ICard,
  orientation: string
}

const Card = (props:PropsCard):JSX.Element => {
  const {card, orientation} = props;
  return (
    <div className={`card card-orientation-${orientation}`}>
        <img src={require(`../../images/cards/${card.img}`)} />
    </div>
  )
}

export default Card;