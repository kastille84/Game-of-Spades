import {SetGameStartedAction} from './game';
import {
  DistributeCardsAction,
  SetDealerAction
} from './cards';

export type Action = 
SetGameStartedAction |
DistributeCardsAction|
SetDealerAction
;
