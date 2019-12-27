import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";



//===> from saga middleware
import { fork, all } from 'redux-saga/effects'

export interface LabFesState {
  router        : RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
    // fork()
  ]);
}
