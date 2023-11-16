import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initalState = 0;
export const counterReducer = createReducer(
  initalState,
  on(increment, (currState,actionData) => currState + actionData.value),
  on(decrement, (currState,actionData) => currState - actionData.value),
  on(set,(currState,actionData)=>actionData.value)
);
