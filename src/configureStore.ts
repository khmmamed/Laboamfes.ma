import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from "history";

import {createRootReducer, LabFesState, rootSaga} from './store'



export default function configureStore(history : History, initialState : LabFesState): Store<LabFesState>{

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    );
    
    sagaMiddleware.run(rootSaga);

    return store;
}