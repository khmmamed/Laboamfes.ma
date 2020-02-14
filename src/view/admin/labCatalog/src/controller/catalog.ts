import { Dispatch } from 'redux';
import { CatalogActions } from '../store/actions';

export class CatalogClass{

    private dispatch : Dispatch;

    private price ? : CatalogListTestPrice;

    private referred ? : CatalogListTestReferred;

    private reported ? : CatalogListTestReported;


    private convertReportedToHours = (value : number, unit : string) =>(
      unit === 'Mois' ? 
        (value * 24 * 30)
        :
        (unit === 'Jours' ?
          (value * 24)
          :
          value
        )
    )

    constructor(dispatch : Dispatch){

        this.dispatch = dispatch;
    }

    fetchExistingCatalog = () => 
        this.dispatch({
            type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API, 
            path: 'tests',
            payload : {query : `query{ AllLabTests_fr { name { fr } finance { Bcode } } }`}
        })
    ;

    filterCatalogList = (name : string) => 
        this.dispatch({
            type : CatalogActions.CATALOG_LIST_FILTER_TEST_NAME,
            path : "tests",
            payload : {
                query : `query {
                    LabTestFrenchSearch(query : "${name}" ){
                      name {
                        fr
                      }
                      
                      finance {
                        Bcode
                      }
                    }
                  }`
            }
        })
    

    // method to validate user 
    // entries compatibilte 
    validateEntries = (data : any ) => {}

    // set Catalog referring price 
    setCatalogListPrice = (price : number) => {
        
        console.log(price.valueOf())
      // this.price = price;
    } 
    // set if Catalog test is 
    // referred to another lab  
    setCatalogListReferring = (referred : boolean) => this.referred = referred;

    // set Catalog referring price 
    setCatalogListReported = (reported : number, reportedUnit : string) => 
      this.reported = this.convertReportedToHours(reported, reportedUnit);
}