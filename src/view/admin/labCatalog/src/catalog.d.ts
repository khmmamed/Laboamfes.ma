type CatalogListTestId = string
type CatalogListTestReported = number
type CatalogListTestPrice = number
type CatalogListTestReferred = boolean
type CatalogListTestOptionMaterials = boolean
type CatalogListTestOptionTransport = boolean
type CatalogListTestOptionRemarks = string
type CatalogListTestOptionPhlebotomist = boolean

// function types
type convertReportedToMinutes = (
    repoterted : number, 
    reportedUnit : string
) => number 

interface CatalogList {
    testId : string 
    testReported : number
    testPrice : number
    testReferred : boolean
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
}