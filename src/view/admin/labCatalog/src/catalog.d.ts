type CatalogListTestId = string
type CatalogListTestReported = number
type CatalogListTestPrice = number
type CatalogListTestReferred = 'oui' | 'non'
type CatalogListTestOptionMaterials = boolean
type CatalogListTestOptionTransport = boolean
type CatalogListTestOptionRemarks = string
type CatalogListTestOptionPhlebotomist = boolean

// function types
const convertReportedToMinutes = (
    repoterted : number, 
    reportedUnit : string
) : number =>  
(
    reportedUnit === 'Mois' ? 
        (repoterted * 24 * 30)
        :
        (reportedUnit === 'Jours' ?
          (repoterted * 24)
          :
          repoterted
        )
)

interface CatalogList {
    testName?: string
    testId : CatalogListTestId 
    testReported : CatalogListTestReported
    testPrice : CatalogListTestPrice
    testReferred : CatalogListTestReferred
    testOption? : CatalogOptions 
}

interface CatalogOptions {

    materials : boolean

    transport  : boolean

    remarks : string

    phlebotomy : boolean
}

// catalog schema 
// catalog must be customized with laboratory 
// and have options for searchers 
interface Catalog {

    catalogList? : CatalogList[]

    catalogOptionsGlobal : CatalogOptions
}

//Redux catalog State
interface CatalogState {
    catalogList : any[]
    catalogListFetching : boolean
    catalogUpdateConfirmMsg? : string
    updatedCatalog? : CatalogList[]
}