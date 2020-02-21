/* eslint-disable spaced-comment, @typescript-eslint/no-explicit-any */
/// <reference types="react-scripts" />
/// <reference types="./components/authentification-redux-lib" />
/// <reference types="./view/admin/labCatalog" />


// laboratoire fes 
// personel
// materials
// we need : Materials , LocalSite , Personals ==> labtests

// this is a product of our company
//
type LabTest = {}
type LabTestReferenceCode = string
type LabTestReferenceMnemonic = string
type LabTestReferenceCPT = string
type LabTestFinanceCountry = string
type LabTestFinanceBCode = number



interface Reference {
  code      : LabTestReferenceCode
  Mnemonic  : LabTestReferenceMnemonic
  CPT       : LabTestReferenceCPT
}

interface Finance {
  country : LabTestFinanceCountry
  bcode   :LabTestFinanceBCode
}
interface Pre_Analytic   {}

interface LabTest {
  reference     :   Reference
  finance       :   Finance
  preAnalytic  :   Pre_Analytic
}


// Personal data
// Personal = user + company's name worked for 
type ID           = string
type First_Name   = string
type Middle_Name  = string
type Last_Name    = string

interface Name {
  first_Name  : First_Name
  middle_Name : Middle_Name
  last_Name   : Last_Name
}

interface User {
  id    : ID
  name  : Name
}

type businessID = string
type businessName = string
type businessLogo = string
type businessSlogan = string
type businessLocation = string

interface Personal extends User {
  workingFor
}

interface Client extends User {

}

// Material

interface Material {
  name
  function
}

// LocalSite
type AdressStreet   = string
type AdressNum      = string
type AdressState    = string
type AdressCity     = string
type AdressCountry  = string
interface Address {}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any
}

/*************************
***** Global Functions ***
**************************/


