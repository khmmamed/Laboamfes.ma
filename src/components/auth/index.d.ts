//auth State types

type AuthEmail = string
type AuthPassword = string
type AuthConfirmPassword = string
type AuthCode = number

export interface AuthState {
    login : LoginState
    signup : SignupState
    forgetpassword : ForgetPasswordState
}

// Login State types
//

export interface LoginState {
    email : AuthEmail
    password : AuthPassword
}

// Signup State types
// 

export interface SignupState {
    email : AuthPassword
    password : AuthPassword
    confirmPassword : AuthConfirmPassword
}

// ForgetPassword State
//

export interface ForgetPasswordState {
    email : AuthEmail
    code : AuthCode
}
