import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";

import SliderReducer from './reducers/SliderReducer'



//===> from saga middleware
import { fork, all } from 'redux-saga/effects'
import { AuthReducer } from '../components/authentification-redux-lib/src';
import { AuthSaga } from '../components/authentification-redux-lib/src';
import { AuthState } from '../components/authentification-redux-lib/src/types';

//==> Catalog
import catalogReducer from '../view/admin/labCatalog/src/reducers'
import CatalogSaga from '../view/admin/labCatalog/src';


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
  auth          : AuthState
  catalog       : CatalogState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth   : AuthReducer,
    slider : SliderReducer,
    catalog: catalogReducer,
    router : connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
     //Auth
     fork(AuthSaga),

     //Catalog
     fork(CatalogSaga)

  ]);
}
