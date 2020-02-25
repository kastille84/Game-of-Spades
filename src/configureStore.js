import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';

export const middlewares = [ReduxThunk,logger];

//creates a store with the middleware
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;