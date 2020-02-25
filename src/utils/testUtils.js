import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import {middlewares} from '../configureStore';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(reducers, initialState);
}