import {
  COUNTER_INCREMENT,
  COUNTER_INCREMENT_ASYNC,
  COUNTER_DECREMENT,
  COUNTER_DECREMENT_ASYNC
} from './actionTypes';

export const increment = () => ({ type: COUNTER_INCREMENT });

export const incrementAsync = () => ({ type: COUNTER_INCREMENT_ASYNC });

export const decrement = () => ({ type: COUNTER_DECREMENT });

export const decrementAsync = () => ({ type: COUNTER_DECREMENT_ASYNC });
