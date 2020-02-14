import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { CatalogActions } from './actions';
import * as config from '../../../../../config';



function* LabCatalogListFetch({path, payload} : any){

    try{

        yield put({type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING});
        // console.log (action)

        const res = yield call(config.apiCall, 'post', config.api, path, payload );

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_SUCCESS, 
                CatalogList : res.data.AllLabTests_fr
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}


/**
 * Lab
 * Catalog
 * List
 * Filter 
 * by @test @name 
 * watcher function
 * 
 */
function* LabCatalogListFilterTestName({path, payload} : any){

    try {

        const res = yield call(config.apiCall, 'post', config.api, path, payload ); 

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_SUCCESS, 
                CatalogList : res.data.LabTestFrenchSearch
            })
        }

    } catch (e) {

        throw new Error(e);
    }
}

//watcher func dispatcher
function* watchFetchCatalogTests(){

    // TODO try to fetch test from lab catolog 
    yield takeEvery(CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API, LabCatalogListFetch)

    // Filter Catalog List By Name
    yield takeEvery(CatalogActions.CATALOG_LIST_FILTER_TEST_NAME, LabCatalogListFilterTestName)

}

function* CatalogSaga(){
    yield all([fork(watchFetchCatalogTests)])
}

export default CatalogSaga