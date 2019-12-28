import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";

import SliderReducer from './reducers/SliderReducer'



//===> from saga middleware
import { fork, all } from 'redux-saga/effects'


// States declaration
export interface SliderState {
  currSlide : number
  transitionDuration : number
  sliderWidth : number
  hiddenChange : Boolean
}

export interface LabFesState {
  slider        : SliderState
  router        : RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    slider : SliderReducer,
    router : connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
    // fork()
  ]);
}
