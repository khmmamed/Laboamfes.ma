import { combineReducers } from 'redux';
import * as Reducers from './reducers';


export const AuthReducer = combineReducers({
    login : Reducers.loginReducer
})