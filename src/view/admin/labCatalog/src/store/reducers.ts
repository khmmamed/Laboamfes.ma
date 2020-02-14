import { combineReducers, Reducer } from 'redux';
import { CatalogActions } from './actions';

const initialState : CatalogState = {
    catalogList : [],
    catalogListFetching : false
}

const catalogListReducer : Reducer = (state = initialState, action : any) => {

    switch (action.type) {

        case CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING : 

            return {
                ...state, catalogListFetching : true
            }

        case CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_SUCCESS:

            return {
                ...state, catalogList : [...action.CatalogList], catalogListFetching : false
            };
        
        case CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_SUCCESS : 
        
            return {
                ...state, catalogList : [...action.CatalogList]
            }
        default:
            return {
                ...state
            };
    }
}







export default catalogListReducer;