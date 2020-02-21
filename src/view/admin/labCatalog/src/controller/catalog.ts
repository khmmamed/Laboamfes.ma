import { Dispatch } from 'redux';
import { CatalogActions } from '../store/actions';

export class CatalogClass{

    private dispatch : Dispatch;

    private catalogTest : CatalogList[] = [];


    constructor(dispatch : Dispatch){

        this.dispatch = dispatch;

    }

    // set referred price of catalog
    // setPrice = (price : number) => this.price = price;

    // test onBlure
    TestOnBlure = () => console.log('onBlur')





    fetchExistingCatalog = () => 
        this.dispatch({
            type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API, 
            path: 'tests',
            payload : {query : `query{ AllLabTests_fr { id name { fr } finance { Bcode } } }`}
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
    validateEntries = () => {
      // verify if price is set 
      // verify if referred price is a number
      // verify if reported is set 
    }

    

    // set Catalog referring price 
    setCatalogTest = (target : any) =>
    this.catalogTest.push({
      testId : target.name,
      testPrice : <number>target.value.valueOf(),
      testReferred : 'oui' ,
      testReported : 24
    })

    //get referred state
    catalogListFill = (target : any ) => {

      // checking Processor
      let testId = target.parentElement.parentElement.getAttribute("datatype")
      let priceValueActual = target.parentElement.parentElement.getElementsByTagName("input")[0].value;
      let reportedValueActual = target.parentElement.parentElement.getElementsByTagName("input")[1].value;
      let testName = target.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML;
      let defaultPrice = target.parentElement.parentElement.getElementsByTagName("td")[2].innerHTML;
      let referredTest = target.parentElement.parentElement.getElementsByTagName("select")[0].value;
      let reportedUnit = target.parentElement.parentElement.getElementsByTagName("select")[1].value;
      
      priceValueActual.length < 1  ?  

        priceValueActual = defaultPrice.trim() 
        :
        priceValueActual;
      
      reportedValueActual  < 1  ? 

        reportedValueActual = 24
        :
        reportedValueActual;

      console.log(reportedValueActual)
      //==> end of checking Processor
      
      let i : number = this.getIndexIfExist(this.catalogTest, testId);
      if(i < 0 ) this.catalogTest.push({
        testId        : testId,
        testPrice     : priceValueActual,
        testReferred  : referredTest,
        testName      : testName,
        testReported  : this.convertReportedToHours(reportedValueActual, reportedUnit)
      });
      else {
        this.catalogTest[i].testReferred = referredTest
        this.catalogTest[i].testPrice = priceValueActual
        this.catalogTest[i].testId = testId
        this.catalogTest[i].testName = testName
        this.catalogTest[i].testReported = this.convertReportedToHours(reportedValueActual, reportedUnit)

      }
    }
      
    getIndexIfExist = (a : CatalogList[], testname : CatalogListTestId) : number => a.findIndex(e => e.testId === testname)
    // set if Catalog test is 
    // referred to another lab  
    // setCatalogListReferring = (referred : CatalogListTestReferred) => this.referred = referred;

    // set Catalog referring price 
    // setCatalogListReported = (reported : number, reportedUnit : string) => 
    //   // this.reported = convertReportedToHours(reported, reportedUnit);
    
    debug = () => this.dispatch({
      type : CatalogActions.CATALOG_LIST_UPDATING_BY_USER,
      payload : this.catalogTest
    })

    /**
 * convert day or mounth to hours
 * @param value 
 * @param unit 
 */
  convertReportedToHours = (value : number, unit : string) : number =>(
    unit === 'Mois' ? 
      (value * 24 * 30)
      :
      (unit === 'Jours' ?
        (value * 24)
        :
        value
      )
  )


/**
 * verifying if variable is set
 * @params variable
 * @return boolean
 */
  isVarNotEmpty<T>(variable : T) : boolean{return typeof variable === 'undefined' ? false : true};

/**
 * Close Modal Catalog Updating
 */
  ModulConfirmationClose = () => this.dispatch({type : CatalogActions.CATALOG_LIST_UPDATING_MODAL_CLOSE}) 
}