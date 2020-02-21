import { combineReducers, Reducer } from 'redux';
import { CatalogActions } from './actions';

const initialState : CatalogState  = {
    catalogList : [],
    catalogListFetching : false
}

export const catalogListReducer : Reducer = (state = initialState, action : any) => {

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
        case CatalogActions.CATALOG_LIST_UPDATING_BY_USER : 
            return {
                ...state, 
                catalogUpdateConfirmMsg : "Voulez Vous Vraiment Continuer",
                updatedCatalog : [...action.payload]
            }
        
        case CatalogActions.CATALOG_LIST_UPDATING_MODAL_CLOSE : 
            return {
                ...state, 
                catalogUpdateConfirmMsg : undefined
            }
        
        default:
            return {
                ...state
            };
    }
}