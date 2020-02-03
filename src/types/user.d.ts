type UserID = string
type UserEmail = string
type UserToken = string


interface User {
    id : UserID
    email : UserEmail
    token : UserToken
}

type LaboratoryName = "Laboratoire Fes"

interface Personal extends User {
    company : LaboratoryName
}